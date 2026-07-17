import Tag from "../ui/Tag";

function SkillGroup({ group }) {
  return (
    <article className="skill-group">
      <h3 className="skill-group__title">{group.title}</h3>
      <div className="skill-group__tags" aria-label={`${group.title} skills`}>
        {group.skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </article>
  );
}

export default SkillGroup;
