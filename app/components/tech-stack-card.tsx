import {
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiGo,
  SiBun,
  SiLocal,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

type TechStackCardProps = {
  name: string;
};

export const techIconMap: Record<string, JSX.Element> = {
  Typescript: <SiTypescript />,
  Go: <SiGo />,
  Docker: <SiDocker />,
  Bun: <SiBun />,
  "Next.js": <SiNextdotjs />,
  Redis: <SiRedis />,
  PostgreSQL: <SiPostgresql />,
  AWS: <FaAws />,
};

export function TechStackCard({ name }: TechStackCardProps) {
  const icon = techIconMap[name];

  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-[#0d0d1a] px-4 py-2.5 text-sm text-[#c8c8e0] hover:border-indigo-500/40 hover:text-white transition-all duration-200 cursor-default group">
      <span className="text-base text-[#8888a8] group-hover:text-indigo-400 transition-colors duration-200">
        {icon}
      </span>
      <span>{name}</span>
    </div>
  );
}
