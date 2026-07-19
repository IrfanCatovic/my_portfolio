import Reveal from "./Reveal";
import "./ui.css";

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <Reveal as="header" className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {description ? (
        <p className="section-heading__description">{description}</p>
      ) : null}
    </Reveal>
  );
}

export default SectionHeading;
