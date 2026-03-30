import Link from "next/link";
import { ExternalLink } from "lucide-react";

type Feature = {
  text: string;
};

type ProjectProps = {
  name: string;
  description: string;
  sourceLink: string;
  websiteLink?: string;
  npmLink?: string;
  features?: Feature[];
  published?: boolean;
};

export function Project({
  name,
  description,
  sourceLink,
  websiteLink,
  npmLink,
  features,
  published,
}: ProjectProps) {
  return (
    <div className="rounded-2xl border border-[#1c1c2e] bg-[#0d0d1a] p-6 transition-all duration-200 hover:border-[#28283e] hover:shadow-[0_0_24px_rgba(99,102,241,0.08)]">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h2 className="text-sm font-semibold text-[#e4e4f0] leading-snug">
          {name}
        </h2>
        {published && (
          <span className="shrink-0 text-[11px] px-2 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300">
            Published
          </span>
        )}
      </div>

      <p className="text-sm text-[#8a8aaa] mb-4 leading-relaxed">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className="text-sm text-[#8a8aaa] leading-relaxed flex gap-2"
            >
              <span className="text-[#44445a] mt-[5px] shrink-0 text-[10px]">
                ◆
              </span>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2">
        <Link
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 border border-[#1c1c2e] hover:border-[#28283e] text-[#8a8aaa] hover:text-[#e4e4f0] rounded-xl transition-all duration-200"
        >
          Source <ExternalLink size={11} />
        </Link>

        {websiteLink && (
          <Link
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 border border-[#1c1c2e] hover:border-[#28283e] text-[#8a8aaa] hover:text-[#e4e4f0] rounded-xl transition-all duration-200"
          >
            Website <ExternalLink size={11} />
          </Link>
        )}

        {npmLink && (
          <Link
            href={npmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 border border-[#1c1c2e] hover:border-[#28283e] text-[#8a8aaa] hover:text-[#e4e4f0] rounded-xl transition-all duration-200"
          >
            npm <ExternalLink size={11} />
          </Link>
        )}
      </div>
    </div>
  );
}
