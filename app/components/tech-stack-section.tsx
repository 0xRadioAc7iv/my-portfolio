import { TechStackCard } from "./tech-stack-card";

const techStacks = [
  "Go",
  "TypeScript",
  "Redis",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Next.js",
];

export function TechStackSection() {
  return (
    <div className="chip-cloud">
      {techStacks.map((tech) => (
        <TechStackCard key={tech} name={tech} />
      ))}
    </div>
  );
}
