import { TechStackCard } from "./tech-stack-card";

const techStacks = [
  "Node.js",
  "Express.js",
  "Fastify",
  "Next.js",
  "Javascript",
  "Typescript",
  "React.js",
  "TailwindCSS",
  "PostgreSQL",
  "Docker",
  "Redis",
  "AWS",
];

export function TechStackSection() {
  return (
    <div className="mb-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {techStacks.map((tech) => (
          <TechStackCard key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
}
