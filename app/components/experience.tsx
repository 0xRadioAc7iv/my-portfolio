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
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-md transition hover:shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="text-sm text-zinc-400">{duration}</span>
      </div>

      {companyName && (
        <p className="text-sm text-zinc-500 mb-1">{companyName}</p>
      )}

      <p className="text-zinc-300 mb-3">{description}</p>

      {tasks && tasks.length > 0 && (
        <ul className="list-disc pl-5 text-sm text-zinc-400 mb-4 space-y-1">
          {tasks.map((task, index) => (
            <li key={index}>{task.text}</li>
          ))}
        </ul>
      )}

      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              className="inline-flex items-center gap-1 text-sm px-3 py-1.5 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition"
            >
              {link.label} <ExternalLink size={14} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
