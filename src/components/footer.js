import React from "react";
import Twitter from "../images/twitter.svg";

const Footer = () => {
  return (
    <footer className="p-6 md:p-12 border-t flex justify-between">
      <p>&copy;2021</p>
      <div>
        <a
          href="https://twitter.com/vanrooyen_m"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-10"
            src={Twitter}
            alt="Illustation showing a man sat in front of a laptop, tablet and mobile device"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;