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
              I’m a passionate and adaptable frontend developer with strong
              expertise in React, focused on building fast, responsive, and
              user-centered web applications. Over the years, I’ve refined my
              skills in crafting clean interfaces, intuitive layouts, and
              seamless user experiences. Recently, I began expanding my stack by
              learning and developing backend services with Golang, aiming to
              strengthen my full-stack capabilities. My journey started in .NET
              backend development, where I gained a solid understanding of
              system architecture and data management, which now helps me
              structure efficient and maintainable web solutions. Beyond coding,
              my background in graphic design and video production gives me a
              creative edge. I enjoy blending technical precision with visual
              storytelling to create engaging digital experiences. Driven by
              curiosity and growth.
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
