import React from "react";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Afaq</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Services"
              activeClass="activeClass"
            >
              Services
            </Link>
            <Link
              spy={true}
              activeClass="activeClass"
              smooth={true}
              to="Experience"
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              activeClass="activeClass"
              smooth={true}
              to="Portfolio"
            >
              <li>Portfolio</li>
            </Link>
            <Link
              to="Testimonial"
              spy={true}
              activeClass="activeClass"
              smooth={true}
            >
              <li>Testimonial</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
