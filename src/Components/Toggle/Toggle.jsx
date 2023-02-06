import React, { useContext } from "react";
import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { DarkMode } from "../../Context";
const Toggle = () => {
  const { state, dispatch } = useContext(DarkMode);
  const darkmode = state.darkmode;

  const handleDinRaat = () => {
    dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle" onClick={handleDinRaat}>
      <Sun />
      <Moon />
      <button
        className="t-button"
        style={darkmode ? { left: "2px" } : { right: "2px" }}
      ></button>
    </div>
  );
};

export default Toggle;
