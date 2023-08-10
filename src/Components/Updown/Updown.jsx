import React, { useState, useEffect } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "./Updown.css";

const Updown = () => {
  const [clicked, setClicked] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    setClicked(!clicked);

    if (!clicked) {
      scrollToBottom();
    } else {
      scrollToTop();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="updown__container" onClick={handleClick}>
      {isAtTop ? (
        <FaAngleDown/>
      ) : (
        <FaAngleUp/>
      )}
    </div>
  );
};

export default Updown;
