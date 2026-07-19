import Reveal from "../ui/Reveal";

function ExperienceItem({ item, delay = 0 }) {
  return (
    <Reveal as="li" className="experience-item" delay={delay}>
      <h3 className="experience-item__role">{item.role}</h3>
      <p className="experience-item__company">{item.company}</p>
      <p className="experience-item__period">{item.period}</p>
      <p className="experience-item__summary">{item.summary}</p>
    </Reveal>
  );
}

export default ExperienceItem;
