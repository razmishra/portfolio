// cta means CALL TO ACTION

import React from "react";
import { Link } from "react-scroll";
const CV =
  "https://1drv.ms/b/s!AjK6I3KW6XMUiRkWsh7WXooIoMnt?e=JRL6hH";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn" target="__blank">
        View Resume
      </a>
      <Link to="contact" className="btn btn-primary">
        Let's Talk
      </Link>
    </div>
  );
};

export default CTA;
