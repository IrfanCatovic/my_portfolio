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
              I am a dynamic and versatile professional with a rich background
              in various roles, dedicating nearly two years to software
              development. Specializing in backend development with the .NET
              framework, I've seamlessly transitioned into frontend development
              as a React developer, showcasing adaptability across diverse
              technology stacks. Beyond my technical prowess, I bring a creative
              flair, having excelled as a graphic designer and video editor.
              Committed to innovation and excellence, my diverse skill set
              positions me as a valuable asset to any team or project, blending
              technical proficiency with creative ingenuity.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills name">Front end - React</h3>
                <span className="skills number">100%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills name">Graphic design</h3>
                <span className="skills number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills name">Video editing</h3>
                <span className="skills number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage photography"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills name">Back end - Nest JS</h3>
                <span className="skills number">50%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage back_end"></span>
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
