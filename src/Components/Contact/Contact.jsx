import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinLine } from "react-icons/ri";
import { TfiSkype } from "react-icons/tfi";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ntfls18",
        "template_jimm7oj",
        form.current,
        "m24oTzismM2TMFsi9"
      )
      .then(
        (result) => {
          // console.log(result.text);
          form.current.reset();
          setSuccess("Your message has been sent");
          setTimeout(() => {
            setSuccess(""); // Clear the success message after 1 second
          }, 5000);
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <Tilt options={defaultOptions}>
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>rajneeshmishra672@gmail.com</h5>
              <a href="mailto:rajneeshmishra672@gmail.com">Send a message</a>
            </article>
          </Tilt>
          <Tilt options={defaultOptions}>
            <article className="contact__option">
              <RiLinkedinLine className="contact__option-icon" />
              <h4>Linkedin</h4>
              <h5>rajneesh1m</h5>
              <a href="https://www.linkedin.com/in/rajneesh1m/" target="_blank">
                Send a message
              </a>
            </article>
          </Tilt>
          <Tilt options={defaultOptions}>
            <article className="contact__option">
              <TfiSkype className="contact__option-icon" />
              <h4>Skype</h4>
              <h5>live:.cid.2645827569bcce5f</h5>
              <a href="skype:live:rajneeshmishra2?chat" target="__blank">
                Send a message
              </a>
            </article>
          </Tilt>
        </div>

        {/* ENC OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
          {success && <p className="success-message">{success}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
