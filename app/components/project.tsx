import Link from "next/link";

type ProjectProps = {
  name: string;
  description: string;
  sourceLink: string;
  websiteLink?: string;
};

export function Project({
  name,
  description,
  sourceLink,
  websiteLink,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="flex gap-4 items-center">
        <h1 className="text-lg font-semibold">{name}</h1>
        <Link href={sourceLink} target="_blank">
          <p className="underline">Source</p>
        </Link>
        {websiteLink && (
          <Link href={websiteLink} target="_blank">
            <p className="underline">Website</p>
          </Link>
        )}
      </div>
      <p>{description}</p>
    </div>
  );
}
