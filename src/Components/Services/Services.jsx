import React from "react";
import "./Services.css";
import Card from "../Card/Card.jsx";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./MY CV.pdf";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: "1", type: "string" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* LEFT SIDE */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem Ipsum is simply dummy text of printing Lorem <br />
          Ipsum is simply dummy text of printing
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>
      {/* RIGHT SIDE */}
      <div className="cards">
        {/* FIRST CARD */}
        <motion.div
          initial={{ left: "15rem" }}
          whileInView={{ left: "25rem" }}
          transition={transition}
          style={{ left: "20rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={
              "Figma, Sketch, Adobe PhotoShop, Adobe Premiere Pro, Adobe Illustrator, Adobe XD"
            }
          />
        </motion.div>
        {/* SECOND CARD */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-8rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={
              "HTML, CSS, BootStrap, JavaScript, ReactJS, ExpressJS, NodeJS and MongoDB"
            }
          />
        </motion.div>
        {/* THIRD CARD */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "16rem" }}
          transition={transition}
          style={{ top: "22rem", left: "18rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem Ipsum dummy text are usually used in section where we need some random text"
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
