import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";

// import required modules
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";

// images list
const images = [
  {
    id: 1,
    src: "/img/panels/halfCell/half-cell1.png",
  },
  {
    id: 2,
    src: "/img/panels/halfCell/half-cell2.png",
  },
  {
    id: 3,
    src: "/img/panels/bifacial/bifacial1.png",
  },
  {
    id: 4,
    src: "/img/inverter/inverter1.png",
  },
  {
    id: 5,
    src: "/img/inverter/inverter2.png",
  },
  {
    id: 6,
    src: "/img/battery/battery.png",
  },
];

const ProductsSlides = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
          background: "black",
          height: "80vh",
        }}
        navigation={true}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={2500}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          // pauseOnMouseEnter: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((el) => (
          <SwiperSlide key={el.id}>
            <div className="swiper-zoom-container resize">
              <img src={el.src} alt="slide" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductsSlides;
