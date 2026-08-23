// KV-backed read cache for the /blog server-fns. Cuts repeat Notion API
// calls for the same page — the blog has no write-heavy traffic, so a
// short TTL trades a little publish-latency for a large drop in request
// volume.
//
// Nitro's cloudflare-module preset does NOT proxy binding objects (KV, R2,
// D1, etc.) onto process.env — only plain string `vars` land there, which
// is why NOTION_TOKEN works via process.env elsewhere in this codebase but
// a KV namespace does not. Bindings are set fresh on globalThis.__env__ at
// the top of every request by Nitro's cloudflare-module handler (see
// node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs).
// That's the documented mechanism for this preset, so we read from there.
//
// Falls back to "no cache" (calls the fetcher directly) if the binding
// isn't present — e.g. running outside the deployed worker.

type KVNamespaceLike = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, opts?: { expirationTtl?: number }): Promise<void>;
};

const CACHE_TTL_SECONDS = 60;

function getKv(): KVNamespaceLike | null {
  const env = (globalThis as unknown as { __env__?: { BLOG_CACHE?: KVNamespaceLike } }).__env__;
  return env?.BLOG_CACHE ?? null;
}

export async function cached<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
  const kv = getKv();
  if (!kv) return fetcher();

  const hit = await kv.get(key);
  if (hit !== null) {
    try {
      return JSON.parse(hit) as T;
    } catch {
      // Fall through to a fresh fetch if the cached value is somehow malformed.
    }
  }

  const fresh = await fetcher();
  await kv.put(key, JSON.stringify(fresh), { expirationTtl: CACHE_TTL_SECONDS });
  return fresh;
}
