import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { DarkMode } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const { state } = useContext(DarkMode);
  const darkmode = state.darkmode;
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <>
      <div className="services" id="Services">
        <div className="awesome">
          <span style={{ color: darkmode ? "white" : "" }}>My Awesome</span>
          <span>Services</span>
          <span style={{ color: darkmode ? "white" : "" }}>
            Lorem ipsum is simply dumy text of printing Lorem
            <br />
            ipsum is simply dummy text of printing
          </span>
          <button className="button s-button">Download CV</button>
          <button
            className="blur s-blur"
            style={{
              background: "#Abf1ff94",
            }}
          >
            Download CV
          </button>
        </div>

        <div className="cards">
          <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
            // style={{ left: "14rem" }}
          >
            <Card
              emoji={HeartEmoji}
              heading="Design"
              detail={"Figma, Sketch, Photoshop, Adobe, Adobe, xd"}
            />
          </motion.div>
          <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            // style={{ top: "12rem", left: "-4rem" }}
          >
            <Card
              emoji={Glasses}
              heading="Developer"
              detail={"HTML5, CSS3, JavaScript, React"}
            />
          </motion.div>
          <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
            // style={{ top: "19rem", left: "12rem" }}
          >
            <Card
              emoji={Humble}
              heading="UI/UX"
              detail={"Lorem Ipsum dummy text to show"}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
