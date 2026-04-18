import type { ReactElement } from "react";
import {
  SiDocker,
  SiGo,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

type TechStackCardProps = {
  name: string;
};

export const techIconMap: Record<string, ReactElement> = {
  TypeScript: <SiTypescript />,
  Go: <SiGo />,
  Docker: <SiDocker />,
  "Next.js": <SiNextdotjs />,
  Redis: <SiRedis />,
  PostgreSQL: <SiPostgresql />,
  AWS: <FaAws />,
};

export function TechStackCard({ name }: TechStackCardProps) {
  return (
    <div className="chip">
      <span className="text-sm text-[color:var(--ink)]">
        {techIconMap[name]}
      </span>
      <span>{name}</span>
    </div>
  );
}
