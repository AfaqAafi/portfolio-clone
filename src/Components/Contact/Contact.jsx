import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zvv2ekd",
        "template_dk1i9i7",
        form.current,
        "lEUsp_ehIuAWu_hfs"
      )
      .then(
        (result) => {
          setDone(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form">
      <div className="c-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
        </div>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="user"
            name="user-name"
            id="user-name"
            placeholder="Name"
          />
          <input
            type="email"
            name="user-name"
            className="user"
            id="user-name"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          {done ? <span>Thanks for Contacting!</span> : ""}

          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
