function AboutBox() {
  return (
    <div className="about_boxes grid">
      <div className="about_box">
        <i className="about_icon icon-fire"></i>

        <div>
          <h3 className="about_title">250+</h3>
          <span className="about_subtitle">Project completed</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-cup"></i>

        <div>
          <h3 className="about_title">4300+</h3>
          <span className="about_subtitle">Cup of coffee</span>
        </div>
      </div>
      <div className="about_box">
        <i className="about_icon icon-people"></i>

        <div>
          <h3 className="about_title">200+</h3>
          <span className="about_subtitle">Satisfied clients</span>
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
