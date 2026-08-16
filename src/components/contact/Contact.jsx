import { useId, useState } from "react";
import { site } from "../../data/site";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./contact.css";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const formId = useId();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      nextErrors.subject = "Please enter a subject.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please enter a message.";
    } else if (form.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      setStatus("error");
      setStatusMessage("Please correct the highlighted fields and try again.");
      return;
    }

    setStatus("loading");
    setStatusMessage("Sending your message…");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${site.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            subject: form.subject.trim(),
            message: form.message.trim(),
            _template: "table",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      const result = await response.json();
      if (result.success !== true && result.success !== "true") {
        throw new Error("Form submission failed");
      }

      setForm(INITIAL_FORM);
      setErrors({});
      setStatus("success");
      setStatusMessage(
        "Thanks — your message was sent successfully. I will get back to you soon."
      );
    } catch {
      setStatus("error");
      setStatusMessage(
        `The contact form could not send right now. Please email me directly at ${site.email}.`
      );
    }
  };

  return (
    <section
      className="section section--band contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Reveal className="container contact__layout" variant="scale">
        <div className="contact__intro">
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
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/IrfanCatovic
              </a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/irfan-catovic
              </a>
            </li>
            <li>
              <span>Location</span>
              <p>{site.location}</p>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__field">
            <label htmlFor={`${formId}-name`}>Name</label>
            <input
              id={`${formId}-name`}
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            />
            {errors.name ? (
              <p id={`${formId}-name-error`} className="contact__error">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div className="contact__field">
            <label htmlFor={`${formId}-email`}>Email</label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? `${formId}-email-error` : undefined
              }
            />
            {errors.email ? (
              <p id={`${formId}-email-error`} className="contact__error">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div className="contact__field">
            <label htmlFor={`${formId}-subject`}>Subject</label>
            <input
              id={`${formId}-subject`}
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={
                errors.subject ? `${formId}-subject-error` : undefined
              }
            />
            {errors.subject ? (
              <p id={`${formId}-subject-error`} className="contact__error">
                {errors.subject}
              </p>
            ) : null}
          </div>

          <div className="contact__field">
            <label htmlFor={`${formId}-message`}>Message</label>
            <textarea
              id={`${formId}-message`}
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? `${formId}-message-error` : undefined
              }
            />
            {errors.message ? (
              <p id={`${formId}-message-error`} className="contact__error">
                {errors.message}
              </p>
            ) : null}
          </div>

          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending…" : "Send Message"}
          </Button>

          {statusMessage ? (
            <p
              className={`contact__status contact__status--${status}`}
              role="status"
              aria-live="polite"
            >
              {statusMessage}
            </p>
          ) : null}
        </form>
      </Reveal>
    </section>
  );
}

export default Contact;
