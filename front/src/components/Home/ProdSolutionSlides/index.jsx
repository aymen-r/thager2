import React from "react";
import "./style.css";
import image from "./factory.png";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import IconsAnimation from "./IconsAnimation";

// **** images bullet pagination import *****
import image1 from "./solar-energy-panel.svg";
import image2 from "./icons8.png";
import image3 from "./box.png";
import image5 from "./solar-energy.svg";
import image6 from "./street-light.png";
import image7 from "./fix.png";

import { EffectFade } from "swiper";
SwiperCore.use([Pagination, Autoplay]);

const bullets = [
  `<img src=${image1} />`,
  `<img src=${image2} />`,
  `<img src=${image5} />`,
  `<img src=${image3} />`,
  `<img src=${image6} />`,
  `<img src=${image7} />`,
];
// return `<span class='swiper-pagination-bullet' >${bullets[current]}</span>`;
// const bulletImages = [image1, image2, image3, image5, image1, image2];

const ProdSolutionSlides = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      console.log(index);
      return `<span class=${className} >${bullets[index]}</span>`;
    },
    renderCustom: function (swiper, current, total) {
      console.log(swiper);
      console.log(current);
      console.log(total);
    },
  };
  return (
    <div className="container solutions">
      <h2>Solutions</h2>
      <div className="p-s">
        <div className="p-s-slides">
          <div className="sw-slides">
            <Swiper
              direction={"vertical"}
              modules={[EffectFade]}
              effect="fade"
              pagination={{
                type: "bullets",
                ...pagination,
              }}
              grabCursor={false}
              spaceBetween={0}
              loop={true}
              speed={3500}
              autoplay={{
                // delay: 2000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={isActive ? "anim sol-slide" : "sol-slide"}>
                    <h3>Solar Panels</h3>
                    <p>
                      Buy your solar panels at the best price in our online
                      store. Our photovoltaic solar panels yield real energy
                      savings.
                    </p>
                    <button className="btna">show more</button>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={isActive ? "anim sol-slide" : "sol-slide"}>
                    <h3>Solar Inverters</h3>
                    <p>
                      WE offers a complete range of photovoltaic inverters for
                      your solar panels at the best prices. You want to buy your
                      inverter, benefit from the best prices, the best warranty
                      and flexible delivery? Then chose the No1 of photovoltaic
                      products.
                    </p>
                    <button className="btna">show more</button>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={isActive ? "anim sol-slide" : "sol-slide"}>
                    <h3>Solar Batteries</h3>
                    <p>
                      Thager alrafedain , the No1 online reseller of solar
                      panels has selected the best solar batteries for you. You
                      will find a wide range of solar batteries compatible with
                      your photovoltaic panels. You can choose your solar
                      battery according to battery type: We offer AGM,
                      GEL,Tubler, lithium, OPzS and OPzV solar batteries.
                    </p>
                    <button className="btna">show more</button>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={isActive ? "anim sol-slide" : "sol-slide"}>
                    <h3>Pv combiner Box</h3>
                    <p>top-notch Pv combiner box</p>
                    <button className="btna">show more</button>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={isActive ? "anim sol-slide" : "sol-slide"}>
                    <h3>Solar Street Lights</h3>
                    <p>Solar Street Lights</p>
                    <button className="btna">show more</button>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={isActive ? "anim sol-slide" : "sol-slide"}>
                    <h3>Structure Fixing</h3>
                    <p>Structure Fixing</p>
                    <button className="btna">show more</button>
                  </div>
                )}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* <IconsAnimation /> */}
        <div className="p-s-video">
          <img src={image} alt="45s" />
        </div>
      </div>
    </div>
  );
};

export default ProdSolutionSlides;
