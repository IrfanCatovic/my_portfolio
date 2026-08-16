import { experience } from "../../data/experience";
import SectionHeading from "../ui/SectionHeading";
import ExperienceItem from "./ExperienceItem";
import "./experience.css";

function Experience() {
  return (
    <section
      className="section experience"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow="Career"
          title="Experience"
          description="Product engineering, operations systems, and creative production work."
        />
        <ol className="experience__list">
          {experience.map((item, index) => (
            <ExperienceItem key={item.id} item={item} delay={index * 70} />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
