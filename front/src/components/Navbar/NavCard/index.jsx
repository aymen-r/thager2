import React from "react";
import "./style.css";

const NavCard = ({ item }) => {
  return (
    <div class="container">
      <div class="image">
        <img
          src={item.image}
          alt="Avatar"
          style={{
            width: "100%",
          }}
        />
      </div>

      <div class="middle">
        <div class="text">{item.title}</div>
      </div>
    </div>
  );
};

export default NavCard;
