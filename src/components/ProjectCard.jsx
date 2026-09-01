import { ExternalLink, GitBranch } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <span className="project-number">{project.number}</span>

      <div>
        <h3 className="project-name">{project.name}</h3>
        <span className="project-category">{project.category}</span>
        <p className="project-desc">{project.description}</p>

        <ul className="project-highlights">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <p className="project-tech">{project.tech.join(" · ")}</p>
      </div>

      <div className="project-links">
        <a
          className="project-link"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          <GitBranch size={16} aria-hidden="true" />
          Source
        </a>

        {project.demo ? (
          <a
            className="project-link"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={16} aria-hidden="true" />
            Live demo
          </a>
        ) : project.installNote ? (
          <span className="project-link disabled">{project.installNote}</span>
        ) : (
          <span className="project-link disabled">Live demo coming soon</span>
        )}
      </div>
    </div>
  );
}
