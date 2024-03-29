/* eslint-disable jsx-a11y/iframe-has-title */
import "./home.css";
import Me from "../../assests/selfie.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Irfan Ćatović</h1>
        <span className="home_education">
          I'm a full stack developer and graphic designer
        </span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire Me!
        </a>
        <ScrollDown />
      </div>
      <Shapes className="shapes" />
    </section>
  );
}

export default Home;
