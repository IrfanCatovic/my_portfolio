import selfie from "../../assests/selfie.png";
import { site } from "../../data/site";
import Button from "../ui/Button";
import "./hero.css";

function Hero() {
  return (
    <section className="hero section" id="home" aria-labelledby="hero-name">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__status hero-animate hero-animate--0">
            <span className="hero__status-dot" aria-hidden="true" />
            {site.availability}
          </p>

          <h1 id="hero-name" className="hero__name hero-animate hero-animate--1">
            {site.name}
          </h1>

          <p className="hero__title hero-animate hero-animate--2">{site.title}</p>
          <p className="hero__support hero-animate hero-animate--3">
            {site.heroSupport}
          </p>
          <p className="hero__location hero-animate hero-animate--4">
            {site.location}
          </p>

          <div className="hero__actions hero-animate hero-animate--5">
            <Button href="#projects">View My Work</Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>

        <div className="hero__media hero-animate hero-animate--6">
          <div className="hero__photo-wrap">
            <div className="hero__photo-accent" aria-hidden="true" />
            <div className="hero__photo-frame">
              <img
                src={selfie}
                alt={`${site.name}, full stack developer`}
                className="hero__photo"
                width="400"
                height="480"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
