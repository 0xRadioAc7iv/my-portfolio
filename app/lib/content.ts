import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import type { ZodType } from "zod";
import { createSlugger } from "./slug";

const MODULE_DIR = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_ROOT = path.resolve(MODULE_DIR, "../../content");

const COLLECTION_DIRS = {
  blog: path.join(CONTENT_ROOT, "blog"),
  projects: path.join(CONTENT_ROOT, "projects"),
} as const;

export type CollectionName = keyof typeof COLLECTION_DIRS;

export type LoadedItem<T> = T & {
  slug: string;
  body: string;
  sourceFile: string;
};

export async function loadCollection<T extends { title: string }>(
  collection: CollectionName,
  schema: ZodType<T>,
): Promise<LoadedItem<T>[]> {
  const absDir = COLLECTION_DIRS[collection];

  let entries: string[];
  try {
    entries = await fs.readdir(absDir);
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === "ENOENT") return [];
    throw err;
  }

  const mdxFiles = entries.filter((name) => name.endsWith(".mdx"));
  const slugger = createSlugger();
  const seen = new Map<string, string>();
  const items: LoadedItem<T>[] = [];

  for (const fileName of mdxFiles) {
    const sourceFile = path.join(absDir, fileName);
    const displayPath = path.posix.join("content", collection, fileName);
    const raw = await fs.readFile(sourceFile, "utf8");
    const parsed = matter(raw);

    const result = schema.safeParse(parsed.data);
    if (!result.success) {
      throw new Error(
        `[content] Invalid frontmatter in ${displayPath}: ${result.error.message}`,
      );
    }
    const data = result.data;
    const slug = slugger.slug(data.title);

    const existing = seen.get(slug);
    if (existing) {
      throw new Error(
        `[content] Slug collision "${slug}" between ${existing} and ${displayPath}`,
      );
    }
    seen.set(slug, displayPath);

    items.push({
      ...data,
      slug,
      body: parsed.content,
      sourceFile,
    });
  }

  return items;
}
