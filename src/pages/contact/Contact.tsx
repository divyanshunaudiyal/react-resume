import React, { useEffect, useState } from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__heading">
        <h1>Don't be shy . Hit me up !👇🏻</h1>
      </div>
      <div className="contact__info">
        <div className="phone">
          <span>
            <img src="src/images/phone.svg" alt="" />
          </span>
          <span className="phone-number">+91 8447488739</span>
        </div>
        <div className="mail">
          <span>
            <img src="src/images/email.svg" alt="" />
          </span>
          <a href="mailto:div.naudiyal@gmail.com">Div.naudiyal@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
