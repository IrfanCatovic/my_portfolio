import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Tag from "../ui/Tag";
import ProjectCover from "./ProjectCover";
import "./project-card.css";

const MAX_HIGHLIGHTS = 4;
const MAX_TAGS = 8;

function ProjectCard({ project, variant = "supporting" }) {
  const isCompact = variant === "compact";
  const isPrimary = variant === "primary";
  const statusTone = project.privateProject
    ? "private"
    : project.status?.toLowerCase().includes("live")
      ? "success"
      : "muted";

  const highlights = project.highlights?.slice(0, MAX_HIGHLIGHTS) ?? [];
  const technologies = project.technologies?.slice(0, MAX_TAGS) ?? [];

  return (
    <article
      className={`project-card project-card--${variant}`}
    >
      <div className="project-card__media">
        <ProjectCover project={project} />
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          {project.category ? (
            <Badge tone="muted">{project.category}</Badge>
          ) : null}
          {project.status ? (
            <Badge tone={statusTone}>{project.status}</Badge>
          ) : null}
        </div>

        <h3 className="project-card__title">{project.title}</h3>

        <p className="project-card__description">
          {isCompact ? project.summary : project.description}
        </p>

        {!isCompact && project.role && isPrimary ? (
          <p className="project-card__role">
            <span>Role:</span> {project.role}
          </p>
        ) : null}

        {!isCompact && highlights.length ? (
          <ul className="project-card__list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        {technologies.length ? (
          <div className="project-card__tags" aria-label="Technologies used">
            {technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        ) : null}

        <div className="project-card__actions">
          {project.liveUrl ? (
            <Button
              href={project.liveUrl}
              external
              variant="primary"
              className="btn--small"
            >
              Live Project
            </Button>
          ) : project.privateProject ? (
            <span className="project-card__private-note">Private project</span>
          ) : null}
          {project.githubUrl ? (
            <Button
              href={project.githubUrl}
              external
              variant="secondary"
              className="btn--small"
            >
              GitHub
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
