import { site } from "../../data/site";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./contact.css";

function Contact() {
  return (
    <section
      className="section section--band contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Reveal className="container contact__layout" variant="scale">
        <SectionHeading
          id="contact-title"
          eyebrow="Say hello"
          title={site.contactHeading}
          description={site.contactText}
        />

        <ul className="contact__details">
          <li>
            <span>Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            <span>GitHub</span>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              github.com/IrfanCatovic
            </a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              linkedin.com/in/irfan-catovic
            </a>
          </li>
          <li>
            <span>Location</span>
            <p>{site.location}</p>
          </li>
        </ul>

        <div className="contact__actions">
          <Button href={`mailto:${site.email}`}>Email Me</Button>
          <Button href={site.linkedin} external variant="secondary">
            LinkedIn
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;
