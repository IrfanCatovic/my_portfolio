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
              I am a dynamic and multi-talented professional with a strong
              background of jobs a have done. I have honed my skills in software
              development, specializing in backend development with C# during
              nearly two years of dedicated work. Additionally, I possess a
              creative flair, having also served as a video editor and graphic
              designer, showcasing my ability to combine technical expertise
              with artistic sensibilities. My diverse skill set, coupled with a
              commitment to innovation and excellence, makes me a valuable asset
              to any team or project.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills name">Web Development</h3>
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
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
}

export default About;
