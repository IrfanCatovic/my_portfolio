import { site } from "../../data/site";
import SectionHeading from "../ui/SectionHeading";
import "./about.css";

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about__content">
        <SectionHeading
          id="about-title"
          eyebrow="About"
          title="Building practical software end to end"
        />
        <p className="about__text">{site.aboutIntro}</p>

        <div className="about__strengths" aria-label="Core strengths">
          {site.strengths.map((strength) => (
            <article key={strength.title} className="about__strength-card">
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
