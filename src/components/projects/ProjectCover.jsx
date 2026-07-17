function ComingSoonCover({ title }) {
  return (
    <div
      className="project-cover project-cover--coming-soon"
      role="img"
      aria-label={`${title} screenshot coming soon`}
    >
      <p className="project-cover__coming-label">Screenshot</p>
      <p className="project-cover__coming-title">Coming soon</p>
      <p className="project-cover__coming-project">{title}</p>
    </div>
  );
}

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

  if (project.coverStyle === "coming-soon") {
    return <ComingSoonCover title={project.title} />;
  }

  return (
    <div
      className="project-cover project-cover--default"
      role="img"
      aria-label={project.imageAlt}
    >
      <p className="project-cover__title">{project.title}</p>
    </div>
  );
}

export default ProjectCover;
