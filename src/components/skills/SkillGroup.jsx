import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";

function SkillGroup({ group, delay = 0 }) {
  return (
    <Reveal as="article" className="skill-group" delay={delay} variant="scale">
      <h3 className="skill-group__title">{group.title}</h3>
      <div className="skill-group__tags" aria-label={`${group.title} skills`}>
        {group.skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </Reveal>
  );
}

export default SkillGroup;
