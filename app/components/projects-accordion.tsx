"use client";

import { useState } from "react";

type Project = {
  name: string;
  repo: string;
  description: string;
  tags: string[];
  link: string;
  website?: string;
  npm?: string;
};

type Props = {
  projects: Record<string, Project[]>;
  stars: Record<string, number>;
};

export function ProjectsAccordion({ projects, stars }: Props) {
  const categories = Object.keys(projects);
  const [active, setActive] = useState(categories[0]);
  const items = projects[active] ?? [];

  return (
    <div>
      {/* Category tabs */}
      <div className="flex items-center gap-1.5 flex-wrap mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-mono text-xs px-3 py-1.5 rounded-md border transition-all duration-200 ${
              active === cat
                ? "border-indigo-500/50 text-white bg-indigo-500/10"
                : "border-white/10 text-[#8888a8] hover:text-white/80 hover:border-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project list */}
      <div key={active} className="rounded-2xl border border-white/[0.07] bg-[#0d0d1a] overflow-hidden animate-fade-up">
        {items.map((project, idx) => {
          const starCount = stars[project.repo.toLowerCase()] ?? 0;
          return (
            <div
              key={project.name}
              className={`px-5 py-4 transition-colors duration-150 hover:bg-white/[0.02] ${
                idx !== items.length - 1 ? "border-b border-white/[0.06]" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/90 hover:text-indigo-400 transition-colors duration-200"
                >
                  {project.name}
                </a>
                {starCount > 0 && (
                  <span className="font-mono text-xs text-[#8888a8]">
                    {starCount} ⭐
                  </span>
                )}
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-white/10 text-[#8888a8]"
                  >
                    {tag}
                  </span>
                ))}
                <div className="flex gap-3 ml-auto">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#8888a8] hover:text-white transition-colors duration-200"
                    >
                      site↗
                    </a>
                  )}
                  {project.npm && (
                    <a
                      href={project.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#8888a8] hover:text-white transition-colors duration-200"
                    >
                      npm↗
                    </a>
                  )}
                </div>
              </div>
              <p className="text-xs text-[#c8c8e0]/70 leading-relaxed">
                {project.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
