function ComingSoonCover({ title, privateProject }) {
  return (
    <div
      className={`project-cover project-cover--coming-soon${
        privateProject ? " project-cover--private" : ""
      }`}
      role="img"
      aria-label={
        privateProject
          ? `${title} — private client system`
          : `${title} screenshot coming soon`
      }
    >
      <p className="project-cover__coming-label">
        {privateProject ? "Private" : "Preview"}
      </p>
      <p className="project-cover__coming-title">
        {privateProject ? "Client system" : "Screenshot soon"}
      </p>
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
        decoding="async"
      />
    );
  }

  if (project.coverStyle === "coming-soon") {
    return (
      <ComingSoonCover
        title={project.title}
        privateProject={project.privateProject}
      />
    );
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
