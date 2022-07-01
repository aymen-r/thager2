import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Pagination, Autoplay, Keyboard } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./swipe.css";
// import { EffectFade } from "swiper";
import Letterize from "letterizejs";

// backgrounds
import image1 from "./bg/bg1.jpg";
import image2 from "./bg/bg2.jpg";
import image3 from "./bg/bg3.jpg";
import image4 from "./bg/bg4.jpg";
import image5 from "./ba/environ.jpg";
import { useIsVisible } from "react-is-visible";
import anime from "animejs/lib/anime.es.js";

SwiperCore.use([Keyboard, Pagination, Autoplay]);

const Slides = () => {
  const nodeRef1 = useRef();
  const nodeRef2 = useRef();

  const isVisible1 = useIsVisible(nodeRef1);

  return (
    <div className="home-slides">
      <Swiper
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        // grabCursor={false}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1500}
        // autoplay={{
        //   disableOnInteraction: false,
        // }}
      >
        <SwiperSlide>
          {({ isActive }) => {
            if (isActive) {
              anime({
                targets: ["#animate"],
                // translateX: "-25.5rem",
                opacity: 1,
                translateX: "0",
                delay: 500,
                duration: 1500,
                // direction: "reverse",
                easing: "spring(1, 80, 10, 0)",
              });
            } else {
              anime({
                targets: ["#animate"],
                // translateX: "-25.5rem",
                opacity: 0,
                translateX: "-600px",
                delay: 500,
                duration: 1500,
                // direction: "reverse",
                easing: "spring(1, 80, 10, 0)",
              });
            }

            return (
              <section
                className="swiper-slide slide"
                style={{
                  background: ` linear-gradient(to bottom, rgb(0 0 0 /70%), rgb(0 0 0 / 0%)), url(${image1}) no-repeat `,
                }}
              >
                <div className="content1">
                  {/* <h3 id="animate">Thager alrafedain</h3> */}
                  <img
                    src="/images-logos/thager-sl-1.png"
                    alt=""
                    id="animate"
                  />
                </div>
              </section>
            );
          }}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section
            className="swiper-slide slide"
            style={{
              background: `linear-gradient(to bottom,rgb(0 0 0 /0%), rgb(0 0 0 / 0%)),url(${image2}) no-repeat`,
            }}
          >
            <div className="content content2" ref={nodeRef1}>
              <h3 className={isVisible1 ? "animate21 " : "sl2-hd"}>
                <span className="slide2-hd">best services provider</span>
              </h3>
              <h3 className={isVisible1 ? "animate22" : "sl2-bd"}>
                <br />{" "}
                <span className="slide2-bd">
                  “Solar energy, Today’s resource for a brighter tomorrow!”
                </span>
              </h3>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => {
            if (isActive) {
              anime({
                targets: ["#slide-3"],
                opacity: 1,
                translateX: "0px",
                delay: 500,
                duration: 4500,
                easing: "spring(1, 80, 10, 0)",
              });
            } else {
              anime({
                targets: ["#slide-3"],
                opacity: 0,
                translateX: "800px",
                delay: 500,
                duration: 4500,
                easing: "spring(1, 80, 10, 0)",
              });
            }

            return (
              <section
                className="swiper-slide slide "
                style={{
                  background: `linear-gradient(to bottom, rgb(0 0 0 / 20%), rgb(0 0 0 / 20%)),url(${image3}) no-repeat`,
                }}
              >
                <div className="content content3" ref={nodeRef2}>
                  <h3 id="slide-3">
                    We work with companies around the world to provide
                    customized renewable energy solutions.
                  </h3>
                </div>
              </section>
            );
          }}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => {
            if (isActive) {
              anime({
                targets: ["#slide4-button"],
                opacity: 1,
                translateY: "0px",
                delay: 500,
                duration: 1500,
                easing: "linear",
              });
              anime({
                targets: ["#slide4-hd"],
                opacity: 1,
                translateY: "0px",
                delay: 500,
                duration: 1000,
                easing: "linear",
              });
            } else {
              anime({
                targets: ["#slide4-button"],
                opacity: 0,
                translateY: "800px",
                delay: 1500,
                duration: 500,
                easing: "linear",
              });
              anime({
                targets: ["#slide4-hd"],
                opacity: 0,
                translateY: "-800px",
                delay: 1500,
                duration: 500,
                easing: "linear",
              });
            }

            return (
              <section
                className="swiper-slide slide "
                style={{
                  background: `linear-gradient(to bottom, rgb(0 0 0 / 30%), rgb(0 0 0 / 30%)),url(${image4}) no-repeat`,
                }}
              >
                <div className="content">
                  <h3 id="slide4-hd">
                    Don’t wait to check <br />
                    out our New products
                  </h3>
                  <button id="slide4-button">get started</button>
                </div>
              </section>
            );
          }}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => {
            if (isActive) {
              anime({
                targets: ["#slide5-hd"],
                opacity: 1,
                // translateX: "0px",
                delay: 500,
                duration: 4500,
                easing: "spring(1, 80, 10, 0)",
              });
              anime({
                targets: ["#slide5-bd"],
                opacity: 1,
                translateY: "0px",
                delay: 500,
                duration: 4500,
                easing: "spring(1, 80, 10, 0)",
              });
            } else {
              anime({
                targets: ["#slide5-hd"],
                opacity: 0,
                // translateX: "800px",
                delay: 1500,
                duration: 4500,
                easing: "spring(1, 80, 10, 0)",
              });
              anime({
                targets: ["#slide5-bd"],

                translateY: "800px",
                delay: 1500,
                duration: 4500,
                easing: "spring(1, 80, 10, 0)",
              });
            }

            return (
              <section
                className="swiper-slide slide "
                style={{
                  background: `linear-gradient(to bottom, rgb(0 0 0 / 50%), rgb(0 0 0 / 20%)),url(${image5}) no-repeat`,
                }}
              >
                <div className="content content5">
                  <h2 id="slide5-hd">WORLD No.1</h2>
                  <h3 id="slide5-bd">
                    leaders in the development, distribution and supply of solar
                    energy services and solutions.
                  </h3>
                </div>
              </section>
            );
          }}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slides;
