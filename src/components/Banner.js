import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "./Banner.css";

const Banner = ({ program, programCilck }) => {
  const [mainProgram, setMainProgram] = useState([]);

  useEffect(() => {
    let pensByColors = program.sort((a, b) => {
      return b.date - a.date;
    });
    setMainProgram(pensByColors);
  }, [program]);

  const bannerSlier = (mainProgram) => {
    let bannerSlierImg = [];
    for (let index = 0; index < 5; index++) {
      bannerSlierImg.push(
        <SwiperSlide
          key={index}
          onClick={(e) => {
            programCilck(e, mainProgram[index]);
          }}
        >
          <img src={mainProgram[index].background} key={index} alt="" />
          <span>{mainProgram[index].subtitle}</span>
        </SwiperSlide>
      );
    }
    return bannerSlierImg;
  };

  return (
    <div className="banner__contents">
      <div className="swiper">
        <Swiper
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 7000, speed: 5000, disableOnInteraction: false }}
          spaceBetween={0}
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiper"
        >
          {mainProgram == "" ? null : bannerSlier(mainProgram)}
        </Swiper>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default Banner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
