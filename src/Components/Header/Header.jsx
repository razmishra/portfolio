import React from "react";
import CTA from "./CTA";
import ME from "../../assets/portfolio3.png";
import HeaderSocials from "./HeaderSocials";
import Typewriter from 'typewriter-effect';
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>Rajneesh Mishra</h1>
        <div className="typewriter-container">
        <Typewriter
          options={{
            strings: ["Fullstack developer", "Youtuber","Open Source Contributor","Freelancer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <Link to="contact" className="scroll__down">
          Scroll Down
        </Link>
      </div>
    </header>
  );
};

export default Header;
