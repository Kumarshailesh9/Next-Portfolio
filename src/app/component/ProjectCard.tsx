import Link from "next/link";
import { GithubOriginal } from "devicons-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubLink: string;
  liveLink: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between">
      
      {/* Project Info */}
      <div>
        <h2 className="text-xl font-semibold text-gray-600 mb-3">{title}</h2>
        <p className="text-sm text-slate-700 mb-4">{description}</p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex justify-between gap-4 mt-auto">
        <Link
          href={githubLink}
          target="_blank"
          className="flex items-center gap-1 text-gray-600 font-medium hover:text-gray-800 transition-colors"
        >
          <GithubOriginal size={20} />
          <span>GitHub Repo</span>
        </Link>

        <Link
          href={liveLink}
          target="_blank"
          className="flex items-center gap-1 text-gray-600 font-medium hover:text-gray-800 transition-colors"
        >
          {/* You can use a live icon or just text */}
          <span>Live Demo</span>
        </Link>
      </div>
    </div>
  );
}
