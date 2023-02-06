import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { DarkMode } from "../../Context";
import { motion } from "framer-motion";
const Works = () => {
  const { state } = useContext(DarkMode);
  const darkmode = state.darkmode;

  return (
    <div className="works" id="Work">
      <div className="awesome">
        <span style={{ color: darkmode ? "white" : "" }}>
          Works for all these
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum is simply dumy text of printing Lorem
          <br />
          ipsum is simply dummy text of printing
          <br />
          Lorem ipsum is simply dumy text of printing Lorem
          <br />
          ipsum is simply dummy text of printing ipsum is simply dummy text of
          printing
          <br />
        </span>
        <button className="button s-button">Download CV</button>
      </div>
      {/* Right side  */}
      <div className="right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Upwork" />
          </div>

          <div className="w-secCircle">
            <img src={Amazon} alt="Upwork" />
          </div>

          <div className="w-secCircle">
            <img src={Shopify} alt="Upwork" />
          </div>

          <div className="w-secCircle">
            <img src={Facebook} alt="Upwork" />
          </div>
        </motion.div>

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
