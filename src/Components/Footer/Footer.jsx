import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import GitHub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt={Wave} />
      <div className="f-content">
        <span>harisbaig7081@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/__haris__baig__/">
            <Insta color="white" size="3rem" />
          </a>
          <a href="https://www.facebook.com/haris.baig.5815/">
            <Facebook color="white" size="3rem" />
          </a>
          <a href="https://github.com/HarisBaig7081">
            <GitHub color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
