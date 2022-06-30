import React, { useEffect, useRef } from "react";
import "./style.css";
import anime from "animejs/lib/anime.es.js";
import { useIsVisible } from "react-is-visible";
const MyAnime = () => {
  const nodeRef = useRef();
  const isVisible1 = useIsVisible(nodeRef);
  //   console.log(isVisible1);
  useEffect(() => {
    // anime.easing["myCustomEasing"] = function (t) {
    //   return Math.pow(t, 5);
    // };
    // if (isVisible1) {
    // anime({
    //   targets: [".blue", ".green", ".red"],
    //   translateX: function () {
    //     return anime.random(10, 14) + "rem";
    //   },
    //   scale: function () {
    //     return anime.random(10, 20) / 10;
    //   },
    //   rotate: function () {
    //     return anime.random(-360, 360);
    //   },
    //   duration: function () {
    //     return anime.random(1000, 2000);
    //   },
    //   direction: "alternate",
    //   loop: true,
    // targets: [".blue", ".green", ".red"],
    // translateX: "30rem",
    // rotate: 180,
    // borderRadius: "8px",
    // duration: 4000,
    // delay: 1000,
    // loop: false,
    // });
    // }
    // else {
    //   anime({
    //     targets: [".blue", ".green", ".red"],
    //     translateX: "0rem",
    //     rotate: 0,
    //     borderRadius: "8px",
    //     duration: 4000,
    //     loop: false,
    //   });
    // }
  }, []);
  useEffect(() => {
    if (isVisible1) {
      anime({
        targets: [".an"],
        translateX: "23.5rem",
        scale: [0.75, 0.9],
        delay: function (el, index) {
          return index * 80;
        },
        direction: "reverse",
        // loop: true,
      });
    }
  }, [isVisible1]);

  return (
    <section className="anime" ref={nodeRef}>
      <article>
        <div class="an blue" style={{ background: "blue" }}></div>
        <div class="an green" style={{ background: "green" }}></div>
        <div class="an red" style={{ background: "red" }}></div>
      </article>
    </section>
  );
};
// const Anime = () => {
//   useEffect(() => {
//     anime({
//       targets: "anBox ",
//       translateX: function () {
//         return anime.random(10, 14) + "rem";
//       },
//       scale: function () {
//         return anime.random(10, 20) / 10;
//       },
//       rotate: function () {
//         return anime.random(-360, 360);
//       },
//       duration: function () {
//         return anime.random(1000, 2000);
//       },
//       direction: "alternate",
//       loop: true,
//     });
//   }, []);

//   return (
//     <section className="anime">
//       <article>
//         <div class="anBox blue"></div>
//         <div class="anBox green"></div>
//         <div class="anBox red"></div>
//       </article>
//     </section>
//   );
// };

export default MyAnime;
