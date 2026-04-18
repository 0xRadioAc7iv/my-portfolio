import GithubSlugger from "github-slugger";

export function slugify(input: string): string {
  return new GithubSlugger().slug(input);
}

export function createSlugger(): GithubSlugger {
  return new GithubSlugger();
}
