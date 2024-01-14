function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h1 className="contact-heading">
          <h2>Get in touch.</h2>
        </h1>
        <h3 className="mail">
          Shoot an email{" "}
          <a href="mailto:div.naudiyal@gmail.com">Div.naudiyal@gmail.com</a> or
        </h3>
        <div className="contact-msg contact-form" id="contact-form">
          <form action="">
            <div className="form-container">
              <label className="label fullname">
                <input type="text" placeholder="name" id="name" />
              </label>
              <label className="label email-id">
                <input type="email" placeholder="email" id="email" />
              </label>
              <label className="label phone-number">
                <input
                  type="number"
                  placeholder="phone number"
                  id="phone-num"
                />
              </label>
              <label className="label msg">
                <textarea placeholder="message" id="message" />
              </label>
              <button type="submit" id="whatsapp-btn" className="whatsapp">
                Text on Whatsapp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
