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
              in various roles. Over nearly two years, I've dedicated myself to
              software development, specializing in backend development with the
              .NET framework. In addition to my technical proficiency, I've
              expanded my skill set to include frontend development as a React
              developer, demonstrating my adaptability in diverse technology
              stacks. Moreover, I bring a creative flair to my work, having
              successfully served as a graphic designer and video editor. My
              commitment to innovation and excellence, coupled with a diverse
              skill set, positions me as a valuable asset to any team or
              project.
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
