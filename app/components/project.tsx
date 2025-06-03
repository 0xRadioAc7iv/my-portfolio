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
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-md transition hover:shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold">{name}</h2>
        {published && (
          <span className="bg-green-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">
            Published
          </span>
        )}
      </div>

      <p className="text-zinc-300 mb-3">{description}</p>

      {features && features.length > 0 && (
        <ul className="list-disc pl-5 text-sm text-zinc-400 mb-4 space-y-1">
          {features.map((feature, index) => (
            <li key={index}>{feature.text}</li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        <Link
          href={sourceLink}
          target="_blank"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition"
        >
          Source <ExternalLink size={14} />
        </Link>

        {websiteLink && (
          <Link
            href={websiteLink}
            target="_blank"
            className="inline-flex items-center gap-1 text-sm px-3 py-1.5 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition"
          >
            Website <ExternalLink size={14} />
          </Link>
        )}

        {npmLink && (
          <Link
            href={npmLink}
            target="_blank"
            className="inline-flex items-center gap-1 text-sm px-3 py-1.5 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition"
          >
            npm <ExternalLink size={14} />
          </Link>
        )}
      </div>
    </div>
  );
}
