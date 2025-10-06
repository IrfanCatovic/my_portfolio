import "./about.css";
import avt2 from "../../assests/avatar-2.svg";
import AboutBox from "./AboutBox";

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_countainer grid">
        <img src={avt2} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I am a passionate and adaptable developer with strong expertise in
              React and Golang, building fast, scalable, and user-focused web
              applications. My journey started in .NET backend development,
              where I gained a solid understanding of system architecture and
              data management, but over time, my focus shifted toward modern
              frontend and full-stack development. I enjoy crafting clean,
              responsive interfaces and connecting them with efficient backend
              logic. Alongside coding, I bring a creative edge from my
              background in graphic design and video production, allowing me to
              merge technical precision with visual storytelling. Driven by
              growth and innovation, I constantly seek to improve my skills and
              deliver impactful digital experiences.
            </p>
          </div>
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills name">Back end - GOLANG</h3>
                <span className="skills number">100%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage back_end"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills name">Front end - React</h3>
                <span className="skills number">100%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage frontend"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills name">MaterialUI</h3>
                <span className="skills number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage HTML"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills name">Tailwind</h3>
                <span className="skills number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage CSS"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills name">Bootstrap</h3>
                <span className="skills number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage CSS"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills name">Typescript</h3>
                <span className="skills number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage CSS"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills name">Video editing- Premiere pro</h3>
                <span className="skills number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills name">Figma, Photoshop, Illustrator </h3>
                <span className="skills number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
}

export default About;
