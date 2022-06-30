import React from "react";
import "./prodBlock.css";

const ProductBlock = ({ element }) => {
  const { title, image } = element;

  return (
    <div class="card">
      <figure class="card__thumb">
        <img src={image} alt="Pict" class="card__image" />
        <figcaption class="card__caption">
          <h2 class="card__title">{title}</h2>

          <a href="" class="card__button">
            Show more
          </a>
        </figcaption>
      </figure>
    </div>
  );
};
export default ProductBlock;
