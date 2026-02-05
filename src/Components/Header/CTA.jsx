// cta means CALL TO ACTION

import React from "react";
import { Link } from "react-scroll";
const CV =
  "https://drive.google.com/file/d/1G_9qjCOcMHevLGE_gvLCQSGhwAkeiIqM/view?usp=sharing";

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
