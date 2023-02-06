import { useContext } from "react";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import { Testimonial } from "./Components/Testimonial/Testimonial";
import Works from "./Components/Works/Works";
import { DarkMode } from "./Context";

function App() {
  const { state } = useContext(DarkMode);
  const darkmode = state.darkmode;
  return (
    <div
      className="App"
      style={{
        background: darkmode ? "black" : " ",
        color: darkmode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
