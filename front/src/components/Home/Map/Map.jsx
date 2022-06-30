import React from "react";
import "./map.css";

const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25689965.964627206!2d18.88519462282848!3d20.818295622771046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x71eee59a637d807f!2sThagher%20Alrafedain%20%7C%20Tokkma!5e0!3m2!1sen!2stn!4v1654510004367!5m2!1sen!2stn"
        width={"100%"}
        height={"100%"}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="thager"
      />
    </div>
  );
};

export default Map;
