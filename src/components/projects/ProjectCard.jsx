import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Tag from "../ui/Tag";
import "./project-card.css";

function ProjectCover({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt}
        className="project-card__image"
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`project-card__cover project-card__cover--${project.coverStyle || "default"}`}
      role="img"
      aria-label={project.imageAlt}
    >
      <div className="project-card__cover-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <p className="project-card__cover-label">{project.title}</p>
    </div>
  );
}

function ProjectCard({ project, compact = false }) {
  const statusTone =
    project.privateProject
      ? "private"
      : project.status?.toLowerCase().includes("live")
        ? "success"
        : "muted";

  return (
    <article
      className={`project-card ${compact ? "project-card--compact" : ""}`}
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
          {project.privateProject ? (
            <Badge tone="private">Private client project</Badge>
          ) : null}
        </div>

        <h3 className="project-card__title">{project.title}</h3>

        <p className="project-card__description">
          {compact ? project.summary : project.description}
        </p>

        {!compact && project.role ? (
          <p className="project-card__role">
            <span>Role:</span> {project.role}
          </p>
        ) : null}

        {!compact && project.highlights?.length ? (
          <ul className="project-card__list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        {project.technologies?.length ? (
          <div className="project-card__tags" aria-label="Technologies used">
            {project.technologies.map((tech) => (
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
          ) : (
            <span className="project-card__private-note">Private project</span>
          )}
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
