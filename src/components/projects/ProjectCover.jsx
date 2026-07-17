function OperationsCover({ title }) {
  return (
    <div
      className="project-cover project-cover--operations"
      role="img"
      aria-label="Designed project cover for AM Keramika internal business platform"
    >
      <div className="project-cover__header" aria-hidden="true">
        <span className="project-cover__dot" />
        <span className="project-cover__label">Project cover · Not a screenshot</span>
      </div>

      <div className="project-cover__dashboard" aria-hidden="true">
        <div className="project-cover__panel project-cover__panel--sidebar">
          <span>Inventory</span>
          <span>Invoices</span>
          <span>Payments</span>
          <span>Reports</span>
        </div>
        <div className="project-cover__panel project-cover__panel--main">
          <div className="project-cover__stat">
            <small>Stock items</small>
            <strong>248</strong>
          </div>
          <div className="project-cover__stat">
            <small>Outstanding</small>
            <strong>€12.4k</strong>
          </div>
          <div className="project-cover__stat">
            <small>Today</small>
            <strong>€3.2k</strong>
          </div>
          <div className="project-cover__invoice">
            <span>Invoice #1042</span>
            <span className="project-cover__badge">Paid</span>
          </div>
          <div className="project-cover__roles">
            <span>Owner</span>
            <span>Manager</span>
            <span>Worker</span>
          </div>
        </div>
      </div>

      <p className="project-cover__title">{title}</p>
    </div>
  );
}

function CivicCover({ title, category }) {
  return (
    <div
      className="project-cover project-cover--civic"
      role="img"
      aria-label="Designed project cover for the Pomirenje public platform"
    >
      <div className="project-cover__civic-mark" aria-hidden="true">
        <span />
      </div>
      <p className="project-cover__civic-name">{title}</p>
      <p className="project-cover__civic-category">{category}</p>
      <p className="project-cover__civic-note">Designed project cover</p>
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

  if (project.coverStyle === "operations") {
    return <OperationsCover title={project.title} />;
  }

  if (project.coverStyle === "civic") {
    return (
      <CivicCover title={project.title} category={project.category} />
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
