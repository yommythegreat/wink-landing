// Minimal Notion REST client. No SDK — keeps the worker bundle small.
// Called only from server-fns; NOTION_TOKEN is a worker secret and must
// never reach the browser.

const NOTION_VERSION = "2022-06-28";
const NOTION_API = "https://api.notion.com/v1";

type NotionHeaders = { Authorization: string; "Notion-Version": string; "Content-Type": string };

function headers(token: string): NotionHeaders {
  return {
    Authorization: `Bearer ${token}`,
    "Notion-Version": NOTION_VERSION,
    "Content-Type": "application/json",
  };
}

/** Minimum block shape we care about. Notion returns many more fields
 * per block type; we only pick out the ones the renderer uses. */
export type NotionRichText = {
  plain_text: string;
  href: string | null;
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
  };
};

export type NotionBlock = {
  id: string;
  type: string;
  has_children: boolean;
  paragraph?: { rich_text: NotionRichText[] };
  heading_1?: { rich_text: NotionRichText[] };
  heading_2?: { rich_text: NotionRichText[] };
  heading_3?: { rich_text: NotionRichText[] };
  bulleted_list_item?: { rich_text: NotionRichText[] };
  numbered_list_item?: { rich_text: NotionRichText[] };
  quote?: { rich_text: NotionRichText[] };
  callout?: { rich_text: NotionRichText[]; icon?: { emoji?: string } | null };
  code?: { rich_text: NotionRichText[]; language: string };
  image?: {
    caption: NotionRichText[];
    type: "external" | "file";
    external?: { url: string };
    file?: { url: string };
  };
  divider?: Record<string, never>;
  bookmark?: { url: string; caption?: NotionRichText[] };
  children?: NotionBlock[];
};

export type NotionPostSummary = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverUrl: string | null;
  publishDate: string | null;
  tags: string[];
};

type NotionPageProperty =
  | { type: "title"; title: NotionRichText[] }
  | { type: "rich_text"; rich_text: NotionRichText[] }
  | { type: "url"; url: string | null }
  | { type: "checkbox"; checkbox: boolean }
  | { type: "date"; date: { start: string; end: string | null } | null }
  | { type: "multi_select"; multi_select: Array<{ name: string }> }
  | { type: string; [k: string]: unknown };

type NotionPage = {
  id: string;
  properties: Record<string, NotionPageProperty>;
};

function plainText(rt: NotionRichText[] | undefined): string {
  return (rt ?? []).map((t) => t.plain_text).join("");
}

function toSummary(page: NotionPage): NotionPostSummary {
  const props = page.properties;
  const title = props.Title?.type === "title" ? plainText(props.Title.title) : "Untitled";
  const slug = props.Slug?.type === "rich_text" ? plainText(props.Slug.rich_text) : "";
  const excerpt =
    props.Excerpt?.type === "rich_text" ? plainText(props.Excerpt.rich_text) : "";
  const coverUrl = props["Cover URL"]?.type === "url" ? props["Cover URL"].url : null;
  const publishDate =
    props["Publish Date"]?.type === "date"
      ? (props["Publish Date"].date?.start ?? null)
      : null;
  const tags =
    props.Tags?.type === "multi_select"
      ? props.Tags.multi_select.map((t) => t.name)
      : [];
  return { id: page.id, title, slug, excerpt, coverUrl, publishDate, tags };
}

/** Query all published posts, newest first. Only rows with the Published
 * checkbox ticked are returned. */
export async function listPublishedPosts(
  token: string,
  databaseId: string,
): Promise<NotionPostSummary[]> {
  const res = await fetch(`${NOTION_API}/databases/${databaseId}/query`, {
    method: "POST",
    headers: headers(token),
    body: JSON.stringify({
      filter: { property: "Published", checkbox: { equals: true } },
      sorts: [{ property: "Publish Date", direction: "descending" }],
      page_size: 100,
    }),
  });
  if (!res.ok) {
    throw new Error(`Notion listPublishedPosts failed: ${res.status} ${await res.text()}`);
  }
  const data = (await res.json()) as { results: NotionPage[] };
  return data.results.map(toSummary).filter((p) => p.slug.length > 0);
}

/** Find a single post by its Slug property. Returns null if not found. */
export async function findPostBySlug(
  token: string,
  databaseId: string,
  slug: string,
): Promise<NotionPostSummary | null> {
  const res = await fetch(`${NOTION_API}/databases/${databaseId}/query`, {
    method: "POST",
    headers: headers(token),
    body: JSON.stringify({
      filter: {
        and: [
          { property: "Published", checkbox: { equals: true } },
          { property: "Slug", rich_text: { equals: slug } },
        ],
      },
      page_size: 1,
    }),
  });
  if (!res.ok) {
    throw new Error(`Notion findPostBySlug failed: ${res.status} ${await res.text()}`);
  }
  const data = (await res.json()) as { results: NotionPage[] };
  const page = data.results[0];
  return page ? toSummary(page) : null;
}

/** Fetch a page's block children with pagination. Recursively expands
 * children when has_children is true so nested lists/toggles render. */
export async function fetchPageBlocks(
  token: string,
  pageId: string,
): Promise<NotionBlock[]> {
  const blocks: NotionBlock[] = [];
  let cursor: string | undefined;
  do {
    const url = new URL(`${NOTION_API}/blocks/${pageId}/children`);
    url.searchParams.set("page_size", "100");
    if (cursor) url.searchParams.set("start_cursor", cursor);
    const res = await fetch(url.toString(), { headers: headers(token) });
    if (!res.ok) {
      throw new Error(`Notion fetchPageBlocks failed: ${res.status} ${await res.text()}`);
    }
    const data = (await res.json()) as {
      results: NotionBlock[];
      has_more: boolean;
      next_cursor: string | null;
    };
    blocks.push(...data.results);
    cursor = data.has_more ? (data.next_cursor ?? undefined) : undefined;
  } while (cursor);

  // Recursively fill in children for nested blocks (lists, toggles).
  for (const block of blocks) {
    if (block.has_children) {
      block.children = await fetchPageBlocks(token, block.id);
    }
  }
  return blocks;
}
