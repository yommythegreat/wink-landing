import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { listPublishedPosts } from "./lib/notion";
import { buildRobotsTxt, buildSitemapXml } from "./lib/sitemap";

// SEO endpoints handled inline before delegating to TanStack. Both
// are cached at the CF edge (Cache-Control: 3600) so crawler hits
// don't punch through to the Notion API on every request.
async function handleSeoRoute(pathname: string): Promise<Response | null> {
  if (pathname === "/robots.txt") {
    return new Response(buildRobotsTxt(), {
      status: 200,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "public, max-age=3600, s-maxage=3600",
      },
    });
  }
  if (pathname === "/sitemap.xml") {
    try {
      // Secrets live on the fetch env arg (Cloudflare Workers). Vars
      // configured plainly in wrangler.jsonc are on process.env too.
      // Read from either so it works in both wrapper (this) and
      // Nitro-mounted (server-fn) contexts.
      // Nitro's cloudflare-module preset wraps this server.ts and
      // calls fetch(request) with no env arg. Nitro proxies plain
      // string vars + secrets onto process.env before user code
      // runs (same mechanism blog-cache.ts documents), so read from
      // there.
      const token = process.env.NOTION_TOKEN;
      const dbId  = process.env.NOTION_DATABASE_ID;
      const posts = token && dbId ? await listPublishedPosts(token, dbId) : [];
      return new Response(buildSitemapXml(posts), {
        status: 200,
        headers: {
          "content-type": "application/xml; charset=utf-8",
          "cache-control": "public, max-age=3600, s-maxage=3600",
        },
      });
    } catch (err) {
      console.error("sitemap generation failed", err);
      // Return a valid sitemap with just static pages so Search Console
      // isn't left with a hard 500 while Notion is transiently down.
      return new Response(buildSitemapXml([]), {
        status: 200,
        headers: {
          "content-type": "application/xml; charset=utf-8",
          "cache-control": "public, max-age=60, s-maxage=60",
        },
      });
    }
  }
  return null;
}

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      const seoResponse = await handleSeoRoute(url.pathname);
      if (seoResponse) return seoResponse;

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
