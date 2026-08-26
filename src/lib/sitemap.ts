// Sitemap XML generator for usewink.app.
//
// Emitted by src/server.ts on GET /sitemap.xml. Cached at the CF edge
// via Cache-Control so Google's crawler doesn't hammer Notion — the
// blog updates daily at most.

import type { NotionPostSummary } from "./notion";

const ORIGIN = "https://usewink.app";

/** Static marketing routes. Blog posts are appended dynamically. */
const STATIC_PAGES: { path: string; changefreq: string; priority: string }[] = [
  { path: "/",        changefreq: "weekly",  priority: "1.0" },
  { path: "/blog",    changefreq: "daily",   priority: "0.9" },
  { path: "/privacy", changefreq: "yearly",  priority: "0.3" },
  { path: "/terms",   changefreq: "yearly",  priority: "0.3" },
];

function xmlEscape(v: string): string {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function isoDate(input: string | null | undefined): string {
  if (!input) return new Date().toISOString().slice(0, 10);
  const d = new Date(input);
  if (isNaN(d.getTime())) return new Date().toISOString().slice(0, 10);
  return d.toISOString().slice(0, 10);
}

export function buildSitemapXml(posts: NotionPostSummary[]): string {
  const today = new Date().toISOString().slice(0, 10);

  const staticUrls = STATIC_PAGES.map(
    (p) =>
      `  <url>\n    <loc>${ORIGIN}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`,
  );

  const postUrls = posts.map(
    (p) =>
      `  <url>\n    <loc>${ORIGIN}/blog/${xmlEscape(encodeURIComponent(p.slug))}</loc>\n    <lastmod>${isoDate(p.publishDate)}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticUrls,
    ...postUrls,
    "</urlset>",
    "",
  ].join("\n");
}

export function buildRobotsTxt(): string {
  return [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${ORIGIN}/sitemap.xml`,
    "",
  ].join("\n");
}
