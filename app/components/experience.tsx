import { ExternalLink } from "lucide-react";
import Link from "next/link";

type ExperienceProps = {
  title: string;
  duration: string;
  companyName?: string;
  description: string;
  tasks: { text: string }[];
  links?: {
    label: string;
    href: string;
  }[];
};

export function Experience({
  title,
  duration,
  companyName,
  description,
  tasks,
  links,
}: ExperienceProps) {
  return (
    <div className="rounded-2xl border border-[#1c1c2e] bg-[#0d0d1a] p-6 transition-all duration-200 hover:border-[#28283e] hover:shadow-[0_0_24px_rgba(99,102,241,0.08)]">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h2 className="text-sm font-semibold text-[#e4e4f0] leading-snug">
          {title}
        </h2>
        <span className="shrink-0 font-mono text-xs text-[#44445a]">
          {duration}
        </span>
      </div>

      {companyName && (
        <p className="text-xs text-indigo-400/70 mb-3">{companyName}</p>
      )}

      {description && (
        <p className="text-sm text-[#8a8aaa] mb-3 leading-relaxed">
          {description}
        </p>
      )}

      {tasks && tasks.length > 0 && (
        <ul className="space-y-2 mb-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="text-sm text-[#8a8aaa] leading-relaxed flex gap-2"
            >
              <span className="text-[#44445a] mt-[5px] shrink-0 text-[10px]">
                ◆
              </span>
              <span>{task.text}</span>
            </li>
          ))}
        </ul>
      )}

      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 border border-[#1c1c2e] hover:border-[#28283e] text-[#8a8aaa] hover:text-[#e4e4f0] rounded-xl transition-all duration-200"
            >
              {link.label} <ExternalLink size={11} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
