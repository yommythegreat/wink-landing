import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { NotionRenderer } from "@/components/blog/NotionRenderer";
import { PreferredSourceBadge } from "@/components/blog/PreferredSourceBadge";
import { getBlogPost } from "@/server-fns/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const result = await getBlogPost({ data: { slug: params.slug } });
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Post | Wink" }] };
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Wink` },
        { name: "description", content: post.excerpt || `${post.title} — Wink blog` },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt || "" },
        ...(post.coverUrl ? [{ property: "og:image", content: post.coverUrl }] : []),
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: NotFoundPage,
});

function BlogPostPage() {
  const { post, blocks } = Route.useLoaderData();

  return (
    <article className="relative z-[2] mx-auto max-w-[720px] px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-20">
      <Link
        to="/blog"
        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-ink-mute)] transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to blog
      </Link>

      <header className="mt-10">
        {post.publishDate ? (
          <time className="font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-ink-mute)]">
            {new Date(post.publishDate).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        ) : null}
        <h1 className="h-xl mt-4 text-ink">{post.title}</h1>
        {post.excerpt ? (
          <p className="lede mt-5">{post.excerpt}</p>
        ) : null}
        {post.tags.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[color:var(--color-paper-line)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[color:var(--color-ink-mute)]"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
        <PreferredSourceBadge />
      </header>

      {post.coverUrl ? (
        <div className="mt-10 overflow-hidden rounded-2xl bg-[color:var(--color-paper-2)]">
          <img
            src={post.coverUrl}
            alt=""
            className="h-auto w-full"
            onError={(e) => {
              e.currentTarget.closest("div")!.style.display = "none";
            }}
          />
        </div>
      ) : null}

      <div className="mt-12 text-[17px] leading-relaxed text-[color:var(--color-ink-dim)]">
        <NotionRenderer blocks={blocks} />
      </div>
    </article>
  );
}

function NotFoundPage() {
  return (
    <main className="relative z-[2] mx-auto max-w-[600px] px-6 py-24 text-center md:px-10 md:py-32">
      <h1 className="h-lg text-ink">Post not found</h1>
      <p className="lede mx-auto mt-4">
        This post doesn't exist or was moved. Head back to the blog for the
        latest.
      </p>
      <div className="mt-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>
      </div>
    </main>
  );
}
