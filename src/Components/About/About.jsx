import React from "react";
import MEimg from "../../assets/portfolio8.jpg";
import { FaAward } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";
import { VscFolderLibrary } from "react-icons/vsc";
import { Link } from "react-scroll";
import "./About.css";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 50, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.

};

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={MEimg} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <Tilt options={defaultOptions}>
              <article className="about__card">
                <RiCodeSSlashLine className="about__icon" />
                <h5>Tech Enthusiast</h5>
                <small>Passion for learning and coding</small>
              </article>
            </Tilt>
            <Tilt options={defaultOptions}>
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Code Maverick</h5>
                <small>Transforming curiosity into code</small>
              </article>
            </Tilt>

            <Tilt options={defaultOptions}>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects Completed</h5>
                <small>20+ projects completed </small>
              </article>
            </Tilt>
          </div>
          <p>
            I'm a dynamic full-stack developer, freelancer, and YouTuber with an
            M.Sc. in Mathematics and Computing from NIT Hamirpur. Currently a
            backend developer at SoluLab, Also a part time tutor. I blend
            innovation and expertise to craft seamless digital solutions.
          </p>
          <Link to="contact" className="btn btn-primary">
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
