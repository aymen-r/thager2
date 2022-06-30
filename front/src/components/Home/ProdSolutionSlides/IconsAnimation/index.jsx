import React, { useEffect, useRef } from "react";
import image1 from "../solar-energy-panel.svg";
import image2 from "../icons8.png";
import image3 from "../setting.svg";
import image5 from "../solar-energy.svg";
import { GiStreetLight } from "react-icons/gi";
import { MdConstruction } from "react-icons/md";
import anime from "animejs/lib/anime.es.js";
import { useIsVisible } from "react-is-visible";

const IconsAnimation = () => {
  const nodeRef = useRef();
  const isVisible1 = useIsVisible(nodeRef);

  useEffect(() => {
    if (isVisible1) {
      anime({
        targets: [".p-s-icon"],
        // translateX: "-25.5rem",
        // translateY: "-5.5rem",
        translateX: function () {
          return anime.random(-25, 25) + "rem";
        },
        translateY: function () {
          return anime.random(-5, 5) + "rem";
        },
        scale: [0.95, 1.25],
        rotate: 220,
        delay: function (el, index) {
          return index * 300;
        },
        duration: 500,
        direction: "reverse",
        easing: "spring(1, 80, 10, 0)",
        // loop: true,
      });
    }
  }, [isVisible1]);
  return (
    <div className="p-s-icons" ref={nodeRef}>
      <img src={image1} alt="" className="p-s-icon" />
      <img src={image2} alt="" className="p-s-icon" />
      <img src={image5} alt="" className="p-s-icon" />
      <img src={image3} alt="" className="p-s-icon" />
      <GiStreetLight className="p-s-icon" />
      <MdConstruction className="p-s-icon" />
      {/* <img src={image4} alt="" className="p-s-icon" /> */}
    </div>
  );
};

export default IconsAnimation;
