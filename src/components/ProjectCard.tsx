import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
}

const ProjectCard = ({ title, description, githubUrl, demoUrl }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex space-x-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <Github size={20} />
        </a>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <ExternalLink size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;