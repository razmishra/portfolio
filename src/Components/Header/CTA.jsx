// cta means CALL TO ACTION

import React from "react";
import { Link } from "react-scroll";
const CV =
  "https://onedrive.live.com/?authkey=%21AMFFDSnuIWQuAQI&cid=3A3F1E42DD4C9231&id=3A3F1E42DD4C9231%2116442&parId=root&o=OneUp";

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
