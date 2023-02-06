import React, { useContext } from "react";
import { DarkMode } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const { state } = useContext(DarkMode);
  const darkmode = state.darkmode;

  return (
    <div className="experience" id="Experience">
      <div className="achievement ">
        <div className="circle" style={{ color: darkmode ? "black" : "" }}>
          8+
        </div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement ">
        <div className="circle" style={{ color: darkmode ? "black" : "" }}>
          20+
        </div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement ">
        <div className="circle" style={{ color: darkmode ? "black" : "" }}>
          5+
        </div>
        <span>Companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
