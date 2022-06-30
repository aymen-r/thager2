import axios from "axios";
import React, { useContext } from "react";
import { MdDownloading, MdOutlineAddShoppingCart } from "react-icons/md";
import { Store } from "../../../Store";
import "./style.css";

const Product = ({ product }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    console.log(data);
    // if (data.countInStock < quantity) {
    //   window.alert("Sorry. Product is out of stock");
    //   return;
    // }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  return (
    <div className="product">
      <div className="image">
        <div className="reference">
          <p className="h-type">
            {product.type}, solar {product.category}, {product.tag}
          </p>
          <p className="h-name">{product.name}</p>
        </div>
        <img src={product.image} alt="prod" />
      </div>
      <div className="actions">
        <MdOutlineAddShoppingCart
          style={{ cursor: "pointer" }}
          onClick={() => addToCartHandler(product)}
        />
        <MdDownloading />
      </div>
    </div>
  );
};

export default Product;
