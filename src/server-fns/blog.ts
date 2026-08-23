// Blog server-fns. Wrap the Notion client so NOTION_TOKEN (secret) never
// leaves the worker runtime — all Notion calls happen server-side, the
// browser only ever sees the sanitized post shape below.

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  listPublishedPosts,
  findPostBySlug,
  fetchPageBlocks,
  type NotionBlock,
  type NotionPostSummary,
} from "@/lib/notion";
import { cached } from "@/lib/blog-cache";

function env(): { token: string; databaseId: string } {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!token) throw new Error("NOTION_TOKEN is not configured on the worker.");
  if (!databaseId) throw new Error("NOTION_DATABASE_ID is not configured on the worker.");
  return { token, databaseId };
}

export const getBlogPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<NotionPostSummary[]> => {
    const { token, databaseId } = env();
    return cached("blog:list", () => listPublishedPosts(token, databaseId));
  },
);

export const getBlogPost = createServerFn({ method: "GET" })
  .inputValidator(z.object({ slug: z.string().min(1).max(200) }))
  .handler(
    async ({
      data,
    }): Promise<{ post: NotionPostSummary; blocks: NotionBlock[] } | null> => {
      const { token, databaseId } = env();
      return cached(`blog:post:${data.slug}`, async () => {
        const post = await findPostBySlug(token, databaseId, data.slug);
        if (!post) return null;
        const blocks = await fetchPageBlocks(token, post.id);
        return { post, blocks };
      });
    },
  );
