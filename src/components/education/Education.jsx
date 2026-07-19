import { certificates, education } from "../../data/education";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./education.css";

function Education() {
  return (
    <section
      className="section education"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="container">
        <SectionHeading
          id="education-title"
          eyebrow="Background"
          title="Education"
        />

        <div className="education__layout">
          <Reveal as="ul" className="education__list" variant="left">
            {education.map((item) => (
              <li key={item.id} className="education__item">
                <h3 className="education__title">{item.title}</h3>
                <p className="education__detail">{item.detail}</p>
              </li>
            ))}
          </Reveal>

          <Reveal
            as="div"
            className="education__certificates"
            delay={90}
            variant="right"
          >
            <h3 className="education__certificates-title">Certificates</h3>
            <ul>
              {certificates.map((certificate) => (
                <li key={certificate}>{certificate}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Education;
