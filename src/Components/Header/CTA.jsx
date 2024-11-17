// cta means CALL TO ACTION

import React from "react";
import { Link } from "react-scroll";
const CV =
  "https://onedrive.live.com/?authkey=%21ABayHtZeigigye0&cid=1473E9967223BA32&id=1473E9967223BA32%211177&parId=root&o=OneUp";

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
