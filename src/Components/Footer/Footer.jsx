import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";
import {BiLogoLinkedin} from "react-icons/bi"
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <Link to="home" className="footer__logo">
        RAJNEESH
      </Link>
      <ul className="permalinks">
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="experience">Experience</Link>
        </li>
        <li>
          <Link to="service">Service</Link>
        </li>
        <li>
          <Link to="portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.youtube.com/@approachjunction" target="__blank">
          <IoLogoYoutube />
        </a>
        <a href="https://www.instagram.com/_rajneesh_mishra7" target="__blank">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/rajneesh1m/" target="__blank">
          <BiLogoLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rajneesh. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
