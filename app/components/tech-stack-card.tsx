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
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

type TechStackCardProps = {
  name: string;
};

export const techIconMap: Record<string, JSX.Element> = {
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "Express.js": <SiExpress className="text-gray-400" />,
  Fastify: <SiFastify className="text-gray-300" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  Javascript: <SiJavascript className="text-yellow-400" />,
  Typescript: <SiTypescript className="text-blue-500" />,
  "React.js": <SiReact className="text-cyan-400" />,
  TailwindCSS: <SiTailwindcss className="text-sky-400" />,
  PostgreSQL: <SiPostgresql className="text-blue-600" />,
  Docker: <SiDocker className="text-blue-400" />,
  Redis: <SiRedis className="text-red-500" />,
  AWS: <FaAws />,
};

export function TechStackCard({ name }: TechStackCardProps) {
  const icon = techIconMap[name];

  return (
    <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-700 transition">
      <span className="text-lg">{icon}</span>
      <span>{name}</span>
    </div>
  );
}
