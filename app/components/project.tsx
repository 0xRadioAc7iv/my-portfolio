import Link from "next/link";

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
    <div className="flex flex-col gap-2 mb-6">
      <div className="flex flex-wrap gap-4 items-center">
        <h1 className="text-2xl font-semibold">{name}</h1>
        {published && (
          <span className="bg-green-700 text-white text-xs px-2 py-0.5 rounded-full">
            Published
          </span>
        )}
        <div className="flex gap-4">
          <Link href={sourceLink} target="_blank">
            <p className="underline">Source</p>
          </Link>
          {websiteLink && (
            <Link href={websiteLink} target="_blank">
              <p className="underline">Website</p>
            </Link>
          )}
          {npmLink && (
            <Link href={npmLink} target="_blank">
              <p className="underline">npm</p>
            </Link>
          )}
        </div>
      </div>
      <p className="font-semibold">{description}</p>

      {features && features.length > 0 && (
        <ul className="list-disc pl-5 mt-2">
          {features.map((feature, index) => (
            <li key={index}>{feature.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
