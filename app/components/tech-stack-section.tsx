import { TechStackCard } from "./tech-stack-card";

const techStacks = [
  "Typescript",
  "Go",
  "Docker",
  "Bun",
  "Next.js",
  "Redis",
  "PostgreSQL",
  "AWS",
];

export function TechStackSection() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {techStacks.map((tech) => (
          <TechStackCard key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
}
