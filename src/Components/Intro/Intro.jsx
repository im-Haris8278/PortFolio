import React from "react";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import GlassesImoji from "../../img/glassesimoji.png";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "string" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Haris Baig</span>
          <span>
            MERN Stack Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/HarisBaig7081">
            <img src={Github} alt={Github} />
          </a>
          <a href="https://www.linkedin.com/in/haris-baig-665668231/">
            <img src={LinkedIn} alt={LinkedIn} />
          </a>
          <a href="https://www.instagram.com/__haris__baig__/">
            <img src={Instagram} alt={Instagram} />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt={Vector1} />
        <img src={Vector2} alt={Vector2} />
        <img src={Boy} alt={Boy} />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={GlassesImoji}
          alt={GlassesImoji}
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
        >
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>

        {/* BLUR DIVS */}

        <div className="blur" style={{ background: "rgba(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
