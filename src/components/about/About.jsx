import selfie from "../../assests/selfie.png";
import { site } from "../../data/site";
import SectionHeading from "../ui/SectionHeading";
import "./about.css";

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__media">
          <img
            src={selfie}
            alt={`${site.name} professional portrait`}
            className="about__photo"
            loading="lazy"
            width="420"
            height="520"
          />
        </div>

        <div className="about__content">
          <SectionHeading
            id="about-title"
            eyebrow="About"
            title="Building practical software end to end"
          />
          {site.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="about__text">
              {paragraph}
            </p>
          ))}

          <ul className="about__strengths" aria-label="Core strengths">
            {site.strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
