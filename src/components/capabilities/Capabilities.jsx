import { capabilities } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";
import "./capabilities.css";

function Capabilities() {
  return (
    <section
      className="section capabilities"
      id="capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="container">
        <SectionHeading
          id="capabilities-title"
          eyebrow="Focus"
          title="What I Build"
          description="Practical software for products, operations and clear user experiences."
        />
        <div className="capabilities__grid">
          {capabilities.map((item) => (
            <article key={item.id} className="capability-card">
              <h3 className="capability-card__title">{item.title}</h3>
              <p className="capability-card__description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
