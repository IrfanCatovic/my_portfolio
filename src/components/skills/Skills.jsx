import { skillGroups } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";
import SkillGroup from "./SkillGroup";
import "./skills.css";

function Skills() {
  return (
    <section className="section section--band skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="Toolkit"
          title="Skills"
          description="Technologies and practices used across frontend, backend, engineering and visual communication work."
        />
        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <SkillGroup key={group.id} group={group} delay={index * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
