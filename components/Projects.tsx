import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description 1",
    link: "#",
  },
  {
    title: "Project 2",
    description: "Description 2",
    link: "#",
  },
  {
    title: "Project 3",
    description: "Description 3",
    link: "#",
  },
  {
    title: "Project 4",
    description: "Description 4",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl text-center font-bold mb-4">Projects</h1>
      <p className="text-center mb-4">
        I've worked on a broad spectrum of projects, specializing in backend
        development and blockchain technologies.
      </p>
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <Link
            href={project.link}
            key={index}
            className="block p-6 border border-gray-800 rounded-lg hover:bg-gray-900 transition-colors duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              {project.title}
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </h2>
            <p className="text-gray-400">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
