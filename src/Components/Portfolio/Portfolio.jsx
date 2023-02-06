import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "./Portfolio.css";
import { DarkMode } from "../../Context";
const Portfolio = () => {
  const { state } = useContext(DarkMode);
  const darkmode = state.darkmode;

  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkmode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
