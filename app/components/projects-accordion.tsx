"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Project = {
  name: string;
  repo: string;
  description: string;
  tags: string[];
  link: string;
  website?: string;
  npm?: string;
  goPkg?: string;
};

type Props = {
  projects: Record<string, Project[]>;
  stars: Record<string, number>;
  descriptions?: Record<string, string>;
};

export function ProjectsAccordion({
  projects,
  stars,
  descriptions = {},
}: Props) {
  const categories = Object.keys(projects);
  const [active, setActive] = useState(categories[0]);
  const items = projects[active] ?? [];

  return (
    <div className="panel">
      <div className="tab-row">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`tab-btn${active === category ? " tab-active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      {descriptions[active] && (
        <div className="border-b border-[color:var(--line)] px-5 py-2.5">
          <p className="text-[11px] leading-relaxed text-[color:var(--muted)]">
            {descriptions[active]}
          </p>
        </div>
      )}

      {items.map((project, index) => {
        const starCount = stars[project.repo.toLowerCase()] ?? 0;

        return (
          <article
            key={project.name}
            className={`row-hover ${
              index !== items.length - 1
                ? "border-b border-[color:var(--line)]"
                : ""
            }`}
          >
            <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] sm:grid-cols-[2.5rem_minmax(0,1fr)_auto] items-start">
              <div className="flex h-full items-start border-r border-[color:var(--line)] py-5 pl-5">
                <span className="font-mono text-[10px] text-[color:var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="px-5 py-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold tracking-[-0.04em] text-[color:var(--ink)]">
                    {project.name}
                  </h3>
                  {starCount > 0 && (
                    <span className="border border-[color:var(--line)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
                      ★ {starCount}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 max-w-2xl text-sm leading-[1.7] text-[color:var(--muted)]">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.7)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[color:var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden sm:flex flex-col items-stretch gap-1.5 border-l border-[color:var(--line)] px-4 py-5 w-[8rem]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary flex justify-center"
                >
                  Code <ArrowUpRight size={18} strokeWidth={1.75} />
                </a>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary flex justify-center"
                  >
                    Site <ArrowUpRight size={18} strokeWidth={1.75} />
                  </a>
                )}
                {project.npm && (
                  <a
                    href={project.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary flex justify-center"
                  >
                    npm <ArrowUpRight size={18} strokeWidth={1.75} />
                  </a>
                )}
                {project.goPkg && (
                  <a
                    href={project.goPkg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary flex justify-center"
                  >
                    pkg.go <ArrowUpRight size={18} strokeWidth={1.75} />
                  </a>
                )}
              </div>
            </div>

            <div className="flex gap-2 border-t border-[color:var(--line)] px-5 py-3 sm:hidden">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                Code <ArrowUpRight size={16} strokeWidth={1.75} />
              </a>
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  Site <ArrowUpRight size={16} strokeWidth={1.75} />
                </a>
              )}
              {project.npm && (
                <a
                  href={project.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  npm <ArrowUpRight size={16} strokeWidth={1.75} />
                </a>
              )}
              {project.goPkg && (
                <a
                  href={project.goPkg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  pkg.go <ArrowUpRight size={16} strokeWidth={1.75} />
                </a>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
