import { createSlugger } from "./slug";

export type TocItem = {
  depth: number;
  text: string;
  id: string;
};

const HEADING_RE = /^(#{2,3})\s+(.+?)\s*$/gm;
const FENCE_RE = /```[\s\S]*?```/g;

export function extractToc(markdown: string): TocItem[] {
  const stripped = markdown.replace(FENCE_RE, "");
  const slugger = createSlugger();
  const items: TocItem[] = [];
  let match: RegExpExecArray | null;
  while ((match = HEADING_RE.exec(stripped)) !== null) {
    const depth = match[1].length;
    const text = match[2].replace(/`([^`]+)`/g, "$1").trim();
    if (!text) continue;
    items.push({ depth, text, id: slugger.slug(text) });
  }
  return items;
}
