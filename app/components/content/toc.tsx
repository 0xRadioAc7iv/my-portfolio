"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "../../lib/toc";

type Props = {
  items: TocItem[];
  label?: string;
};

export function Toc({ items, label = "On this page" }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0) return;
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: [0, 1] },
    );
    for (const el of headings) observer.observe(el);
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="toc">
      <p className="toc-label">{label}</p>
      <ol className="toc-list">
        {items.map((item) => (
          <li
            key={item.id}
            className={`toc-item toc-depth-${item.depth}${
              activeId === item.id ? " toc-item-active" : ""
            }`}
          >
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function TocDisclosure({ items, label = "On this page" }: Props) {
  if (items.length < 2) return null;
  return (
    <details className="toc-disclosure">
      <summary className="toc-label">{label}</summary>
      <ol className="toc-list">
        {items.map((item) => (
          <li key={item.id} className={`toc-item toc-depth-${item.depth}`}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ol>
    </details>
  );
}
