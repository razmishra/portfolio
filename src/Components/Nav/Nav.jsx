import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState(null); 

  const handleLinkClick = (navId) => {
    setActiveNav(navId);
  };

  return (
    <nav id="nav">
      <Link
        to="home"
        spy={true}
        activeClass={activeNav === "home" ? "active" : ""}
        onClick={() => handleLinkClick("home")}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="about"
        spy={true}
        activeClass={activeNav === "about" ? "active" : ""}
        onClick={() => handleLinkClick("about")}
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="experience"
        spy={true}
        activeClass={activeNav === "experience" ? "active" : ""}
        onClick={() => handleLinkClick("experience")}
      >
        <BiBook />
      </Link>
      <Link
        to="service"
        spy={true}
        activeClass={activeNav === "service" ? "active" : ""}
        onClick={() => handleLinkClick("service")}
      >
        <RiServiceLine />
      </Link>
      <Link
        to="contact"
        spy={true}
        activeClass={activeNav === "contact" ? "active" : ""}
        onClick={() => handleLinkClick("contact")}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
