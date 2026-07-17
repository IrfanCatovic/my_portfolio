import selfie from "../../assests/selfie.png";
import { site } from "../../data/site";
import Button from "../ui/Button";
import "./hero.css";

function Hero() {
  return (
    <section className="hero section" id="home" aria-labelledby="hero-name">
      <div className="container hero__grid">
        <div className="hero__content reveal">
          <h1 id="hero-name" className="hero__name">
            {site.name}
          </h1>
          <p className="hero__title">{site.title}</p>
          <p className="hero__support">{site.heroSupport}</p>
          <p className="hero__location">{site.location}</p>

          <div className="hero__actions">
            <Button href="#projects">View My Work</Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>

        <div className="hero__media reveal reveal--delay">
          <div className="hero__photo-frame">
            <img
              src={selfie}
              alt={`${site.name}, full stack developer`}
              className="hero__photo"
              width="480"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
