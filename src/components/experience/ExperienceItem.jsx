function ExperienceItem({ item }) {
  return (
    <li className="experience-item">
      <h3 className="experience-item__role">{item.role}</h3>
      <p className="experience-item__company">{item.company}</p>
      <p className="experience-item__period">{item.period}</p>
      <p className="experience-item__summary">{item.summary}</p>
    </li>
  );
}

export default ExperienceItem;
