import React from "react";

import Product from "./Product";
import "./style.css";

const ProductsGallery = ({ products }) => {
  return (
    <div className="gallery">
      {products.length > 0 ? (
        products.map((el) => <Product key={el._id} product={el} />)
      ) : (
        <h1>no products found</h1>
      )}
    </div>
  );
};

export default ProductsGallery;
