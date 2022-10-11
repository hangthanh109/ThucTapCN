import React from "react";
import "./Banner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import b1 from "./Banner1.png";
import b2 from "./Banner2.png";
import b3 from "./Banner3.png";
import b4 from "./Banner4.png";
import b5 from "./slideshow.jpg";
import cho from "./cho-cung.png";
import meo from "./meo-cung.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  const bannerSlider = [b1, b2, b3, b4, b5];
  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="list-slideshow">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {bannerSlider.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item} alt="slider" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="list-banner">
          <a className="item" href="#">
            <img src={cho} alt="img" />
            <div className="content">
              <p>Dành cho</p>
              <div>Chó Cưng</div>
            </div>
          </a>
          <a className="item" href="#">
            <img src={meo} alt="img" />
            <div className="content">
              <p>Dành cho</p>
              <div>Mèo Cưng</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
