import readingTime from "reading-time";
import { z } from "zod";
import { loadCollection } from "./content";

const blogPostSchema = z.object({
  title: z.string().min(1).max(80),
  date: z.coerce.date(),
  excerpt: z.string().min(1).max(240),
  draft: z.boolean().default(false),
});

type BlogPostFrontmatter = z.infer<typeof blogPostSchema>;

export type BlogPost = BlogPostFrontmatter & {
  slug: string;
  body: string;
  sourceFile: string;
  readingMinutes: number;
};

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const items = await loadCollection("blog", blogPostSchema);
  const isProd = process.env.NODE_ENV === "production";
  return items
    .filter((post) => (isProd ? !post.draft : true))
    .map((item) => ({
      ...item,
      readingMinutes: Math.max(1, Math.round(readingTime(item.body).minutes)),
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}
