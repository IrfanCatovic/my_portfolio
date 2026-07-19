import { site } from "../../data/site";
import Reveal from "../ui/Reveal";
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
        <Reveal as="p" className="about__text">
          {site.aboutIntro}
        </Reveal>

        <div className="about__strengths" aria-label="Core strengths">
          {site.strengths.map((strength, index) => (
            <Reveal
              key={strength.title}
              as="article"
              className="about__strength-card"
              delay={index * 90}
              variant="scale"
            >
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
