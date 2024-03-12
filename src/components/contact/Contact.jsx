import "./contact.css";

function Contact() {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get in Touch</h2>
      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Feel free to talk to me! 👋</h3>
          <p className="contact_details">You can even send me an email. ✉</p>
        </div>

        <form action="" className="contact_form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact_form-div">
              <input
                type="email"
                className="contact_form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                placeholder="Insert your subject"
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button className="btn">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
