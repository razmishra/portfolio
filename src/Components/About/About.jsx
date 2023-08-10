import React from "react";
import MEimg from "../../assets/portfolio8.jpg";
import { FaAward } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";
import { VscFolderLibrary } from "react-icons/vsc";
import { Link } from "react-scroll";
import "./About.css";

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
            <article className="about__card">
              <RiCodeSSlashLine className="about__icon" />
              <h5>Tech Enthusiast</h5>
              <small>Passion for learning and coding</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Code Maverick</h5>
              <small>Transforming curiosity into code</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>
          <p>
            I'm a dynamic full-stack developer, freelancer, and YouTuber with an
            M.Sc. in Mathematics and Computing from NIT Hamirpur. Currently a
            backend developer at SoluLab, I blend innovation and expertise to
            craft seamless digital solutions.
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
