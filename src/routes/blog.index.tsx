import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/landing/Eyebrow";
import { PreferredSourceBadge } from "@/components/blog/PreferredSourceBadge";
import { getBlogPosts } from "@/server-fns/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Wink" },
      {
        name: "description",
        content:
          "Product notes, stories from early users, and behind-the-scenes updates from the Wink team.",
      },
      { property: "og:title", content: "Wink Blog" },
      { property: "og:description", content: "Notes, stories, and updates from Wink." },
      { property: "og:type", content: "website" },
    ],
  }),
  loader: () => getBlogPosts(),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const posts = Route.useLoaderData();

  return (
    <main className="relative z-[2] mx-auto max-w-[1240px] px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
      <header className="mb-14 max-w-[42ch]">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="h-xl mt-4 text-ink">Notes, stories, and updates.</h1>
        <p className="lede mt-4">
          Product notes, stories from early users, and behind-the-scenes updates
          from the Wink team.
        </p>
        <PreferredSourceBadge />
      </header>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[color:var(--color-paper-line)] bg-white/40 p-10 text-center text-sm text-[color:var(--color-ink-dim)]">
          No posts yet. Come back soon.
        </div>
      ) : (
        <ul className="grid gap-4 md:gap-5">
          {posts.map((p) => (
            <li key={p.id}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col gap-5 overflow-hidden rounded-2xl border border-[color:var(--color-paper-line)] bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 sm:flex-row"
              >
                {p.coverUrl ? (
                  <div className="aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-[color:var(--color-paper-2)] sm:aspect-[4/3] sm:w-56">
                    <img
                      src={p.coverUrl}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
                      onError={(e) => {
                        e.currentTarget.closest("div")!.style.display = "none";
                      }}
                    />
                  </div>
                ) : null}
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  {p.publishDate ? (
                    <time className="font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-ink-mute)]">
                      {new Date(p.publishDate).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  ) : null}
                  <h2 className="h-md mt-2 text-ink">{p.title}</h2>
                  {p.excerpt ? (
                    <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-[color:var(--color-ink-dim)]">
                      {p.excerpt}
                    </p>
                  ) : null}
                  {p.tags.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[color:var(--color-paper-line)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[color:var(--color-ink-mute)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
