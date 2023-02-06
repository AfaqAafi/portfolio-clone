import React, { useContext } from "react";
import "./Intro.css";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { DarkMode } from "../../Context";
import { motion } from "framer-motion";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const { state } = useContext(DarkMode);
  const darkmode = state.darkmode;

  return (
    <div className="intro" id="Navbar">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkmode ? "white" : "" }}>Hy! I Am</span>
          <span>Muhammad Afaq</span>
          <span style={{ color: darkmode ? "white" : "" }}>
            Frontend Developer with high level of experience in web designing
            and development, producting the quality work
          </span>
        </div>
        <button
          className="button i-button"
          style={{ fontWeight: "bold", color: darkmode ? "var(--gray) " : "" }}
        >
          Hire me
        </button>
        <div className="i-icons">
          <img src={Github} alt="Github" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector" />
        <img src={Vector2} alt="Vector2" />
        <img src={boy} alt="boy" />
        <motion.img
          initial={{ left: "-13%" }}
          whileInView={{ top: "-6%" }}
          transition={transition}
          src={glassesimoji}
          alt="boy"
        />
        <motion.div
          initial={{ top: "-4%", left: "-74%" }}
          whileInView={{ left: "54%" }}
          transition={transition}
          style={{ color: darkmode ? "black" : "" }}
          className="webDev"
        >
          <FloatingDiv image={crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0" }}
          transition={transition}
          style={{ color: darkmode ? "black" : "" }}
        >
          <FloatingDiv image={thumbup} text1="Best Design" text2="Award" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            top: "17rem",
            left: "-9rem",
            width: "21rem",
            height: "11rem",
            background: "#C1F5FF",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
