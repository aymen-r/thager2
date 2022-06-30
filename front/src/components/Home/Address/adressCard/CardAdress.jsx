import React from "react";
import { FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import "./cardAdress.css";

const CardAdress = ({ el }) => {
  return (
    <div className="box">
      <div className="head icon-adress">
        {/* <a
          className="icon-adress"
          href="https://www.google.com/maps/place/Thagher+Alrafedain+%7C+Tokkma/@25.272742,55.308361,4z/data=!4m5!3m4!1s0x0:0x71eee59a637d807f!8m2!3d25.272742!4d55.3083607?hl=en"
          target="_blank"
          rel="noreferrer"
        >
        </a> */}
        <FaLocationArrow />
      </div>
      <h2>{el.title}</h2>
      <p>{el.text}</p>
      <a href={el.link} target="_blank" rel="noreferrer">
        <FaMapMarkerAlt
          style={{ color: "red", fontSize: "25px" }}
          className="map-icon"
        />
      </a>
    </div>
  );
};

export default CardAdress;
