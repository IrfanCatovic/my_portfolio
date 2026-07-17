import { certificates, education } from "../../data/education";
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
          description="Formal studies and certificates supporting my engineering work."
        />

        <div className="education__layout">
          <ul className="education__list">
            {education.map((item) => (
              <li key={item.id} className="education__item">
                <h3 className="education__title">{item.title}</h3>
                <p className="education__detail">{item.detail}</p>
              </li>
            ))}
          </ul>

          <div className="education__certificates">
            <h3 className="education__certificates-title">Certificates</h3>
            <ul>
              {certificates.map((certificate) => (
                <li key={certificate}>{certificate}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
