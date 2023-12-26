function Contact() {
  const labels = document.querySelectorAll("label");
  labels.forEach((elem, i) => {
    console.log(elem, i);
    if (i % 2 == 0) elem.classList.add("leftToRight");
    else elem.classList.add("rightToLeft");
  });

  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="contact-h1">Contact</h1>
        <h3 className="mail">
          Shoot an email{" "}
          <a href="mailto:div.naudiyal@gmail.com">Div.naudiyal@gmail.com</a> or
        </h3>
        <div className="contact-msg contact-form" id="contact-form">
          <form action="">
            <label className="label">
              <input type="text" placeholder="name" id="name" />
            </label>
            <label className="label">
              <input type="email" placeholder="email" id="email" />
            </label>
            <label className="label">
              <input type="number" placeholder="phone number" id="phone-num" />
            </label>
            <label className="label">
              <input type="text" placeholder="message" id="message" />
            </label>
            <button type="submit" id="whatsapp-btn">
              Text on Whatsapp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
