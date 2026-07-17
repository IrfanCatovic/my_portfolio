import { additionalProjects, featuredProjects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import "./projects.css";

function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="Selected work"
          title="Featured Projects"
          description="Product and platform work spanning founder-built systems, internal business software and production team projects."
        />

        <div className="projects__featured">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="projects__additional">
          <SectionHeading
            title="Additional Projects"
            description="Smaller applications that demonstrate frontend craft, API integration and practical product delivery."
          />
          <div className="projects__additional-grid">
            {additionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
