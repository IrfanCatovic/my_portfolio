import { site } from "../../data/site";
import "./footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{site.name}</p>
          <p className="site-footer__role">Full Stack Developer</p>
        </div>

        <div className="site-footer__links">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a
            href={site.designPortfolio}
            target="_blank"
            rel="noopener noreferrer"
          >
            Design
          </a>
        </div>

        <p className="site-footer__copy">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
