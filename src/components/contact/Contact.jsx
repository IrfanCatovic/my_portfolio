import "./contact.css";

function Contact() {
  return <section className="contact container section" id="contact">
    <h2 className="section_title">Get in Touch</h2>

    <div className="contact_container grid">
      <div className="contact_info">
        <h3 className="contact_title">Feel free to talk to me! 👋</h3>
        <p className="contact_details">You can even send me an email. ✉</p>
      </div>

      <form action="" className="contact_form">
        <div className="contact_form-group">
          <div className="contact_form-div">
            <input type="text" className="contact_form-input" placeholder="Inser your name" />
            </div>
        </div>
      </form>
    </div>
  </section>;
}

export default Contact;
