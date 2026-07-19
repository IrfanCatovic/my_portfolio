import {
  additionalProjects,
  primaryProjects,
  supportingProjects,
} from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import "./projects.css";

function Projects() {
  return (
    <section
      className="section projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="Selected work"
          title="Featured Projects"
          description="Founder-built products, internal business systems and production team work."
        />

        <div className="projects__primary">
          {primaryProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="primary"
              delay={index * 80}
            />
          ))}
        </div>

        <div className="projects__supporting">
          {supportingProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="supporting"
              delay={index * 90}
            />
          ))}
        </div>

        <div className="projects__additional">
          <SectionHeading
            title="Additional Projects"
            description="Smaller applications demonstrating frontend craft and API integration."
          />
          <div className="projects__additional-grid">
            {additionalProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant="compact"
                delay={index * 70}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
