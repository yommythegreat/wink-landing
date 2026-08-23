// Turns a Notion block tree into JSX using the site's design tokens
// (--wink, --foreground, --muted-foreground, --border, --card). Only the
// block types the blog actually uses are implemented; unknown types are
// skipped silently so a stray "audio" or "video" block doesn't crash the
// page.

import type { NotionBlock, NotionRichText } from "@/lib/notion";
import { cn } from "@/lib/utils";

function RichText({ text }: { text: NotionRichText[] }) {
  return (
    <>
      {text.map((t, i) => {
        const a = t.annotations;
        let node: React.ReactNode = t.plain_text;
        if (a.code) node = <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm">{node}</code>;
        if (a.bold) node = <strong>{node}</strong>;
        if (a.italic) node = <em>{node}</em>;
        if (a.underline) node = <u>{node}</u>;
        if (a.strikethrough) node = <s>{node}</s>;
        if (t.href) {
          node = (
            <a
              href={t.href}
              className="text-wink underline underline-offset-2 hover:opacity-80"
              target={t.href.startsWith("http") ? "_blank" : undefined}
              rel={t.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {node}
            </a>
          );
        }
        return <span key={i}>{node}</span>;
      })}
    </>
  );
}

function imageUrl(block: NotionBlock): string | null {
  const img = block.image;
  if (!img) return null;
  return img.type === "external" ? (img.external?.url ?? null) : (img.file?.url ?? null);
}

/** Consecutive bulleted / numbered list items need to be grouped into a
 * single <ul>/<ol> so semantics + styling apply. Notion returns them as
 * flat siblings, so we group here at render time. */
type Grouped = { kind: "block"; block: NotionBlock } | { kind: "list"; ordered: boolean; items: NotionBlock[] };

function groupBlocks(blocks: NotionBlock[]): Grouped[] {
  const out: Grouped[] = [];
  for (const b of blocks) {
    const isBul = b.type === "bulleted_list_item";
    const isNum = b.type === "numbered_list_item";
    if (isBul || isNum) {
      const last = out[out.length - 1];
      if (last && last.kind === "list" && last.ordered === isNum) {
        last.items.push(b);
      } else {
        out.push({ kind: "list", ordered: isNum, items: [b] });
      }
    } else {
      out.push({ kind: "block", block: b });
    }
  }
  return out;
}

function Block({ block }: { block: NotionBlock }) {
  switch (block.type) {
    case "paragraph": {
      const rt = block.paragraph?.rich_text ?? [];
      if (rt.length === 0) return <div className="h-4" aria-hidden />; // blank line
      return (
        <p className="my-5 text-base leading-relaxed text-foreground/90">
          <RichText text={rt} />
        </p>
      );
    }
    case "heading_1":
      return (
        <h2 className="mt-12 font-display text-3xl leading-tight md:text-4xl">
          <RichText text={block.heading_1?.rich_text ?? []} />
        </h2>
      );
    case "heading_2":
      return (
        <h3 className="mt-10 font-display text-2xl leading-tight md:text-3xl">
          <RichText text={block.heading_2?.rich_text ?? []} />
        </h3>
      );
    case "heading_3":
      return (
        <h4 className="mt-8 font-display text-xl leading-tight md:text-2xl">
          <RichText text={block.heading_3?.rich_text ?? []} />
        </h4>
      );
    case "quote":
      return (
        <blockquote className="my-6 border-l-2 border-wink pl-4 text-foreground/90">
          <RichText text={block.quote?.rich_text ?? []} />
        </blockquote>
      );
    case "callout": {
      const emoji = block.callout?.icon?.emoji;
      return (
        <div className="my-6 flex gap-3 rounded-2xl border border-border bg-card p-4">
          {emoji && <span className="shrink-0 text-lg leading-none">{emoji}</span>}
          <div className="text-sm text-foreground/90">
            <RichText text={block.callout?.rich_text ?? []} />
          </div>
        </div>
      );
    }
    case "code":
      return (
        <pre className="my-6 overflow-x-auto rounded-2xl border border-border bg-card p-4 text-sm">
          <code>
            {(block.code?.rich_text ?? []).map((t) => t.plain_text).join("")}
          </code>
        </pre>
      );
    case "image": {
      const url = imageUrl(block);
      if (!url) return null;
      const caption = block.image?.caption ?? [];
      return (
        <figure className="my-8">
          <img
            src={url}
            alt={caption.map((c) => c.plain_text).join("") || ""}
            loading="lazy"
            className="w-full rounded-2xl border border-border"
          />
          {caption.length > 0 && (
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              <RichText text={caption} />
            </figcaption>
          )}
        </figure>
      );
    }
    case "divider":
      return <hr className="my-10 border-t border-border" />;
    case "bookmark": {
      const url = block.bookmark?.url;
      if (!url) return null;
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="my-6 block truncate rounded-2xl border border-border bg-card px-4 py-3 text-sm text-wink hover:border-wink/40"
        >
          {url}
        </a>
      );
    }
    default:
      return null;
  }
}

function ListItem({ block, ordered }: { block: NotionBlock; ordered: boolean }) {
  const rt =
    (ordered ? block.numbered_list_item?.rich_text : block.bulleted_list_item?.rich_text) ?? [];
  const children = block.children ?? [];
  const nested = children.filter(
    (c) => c.type === "bulleted_list_item" || c.type === "numbered_list_item",
  );
  return (
    <li className="my-2 leading-relaxed text-foreground/90">
      <RichText text={rt} />
      {nested.length > 0 && <NotionRenderer blocks={nested} />}
    </li>
  );
}

export function NotionRenderer({ blocks }: { blocks: NotionBlock[] }) {
  const grouped = groupBlocks(blocks);
  return (
    <>
      {grouped.map((g, i) => {
        if (g.kind === "block") return <Block key={i} block={g.block} />;
        const cls = cn(
          "my-5 space-y-2 pl-6",
          g.ordered ? "list-decimal" : "list-disc",
        );
        return g.ordered ? (
          <ol key={i} className={cls}>
            {g.items.map((b) => (
              <ListItem key={b.id} block={b} ordered />
            ))}
          </ol>
        ) : (
          <ul key={i} className={cls}>
            {g.items.map((b) => (
              <ListItem key={b.id} block={b} ordered={false} />
            ))}
          </ul>
        );
      })}
    </>
  );
}
