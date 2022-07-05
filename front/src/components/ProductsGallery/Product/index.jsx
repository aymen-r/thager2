import axios from "axios";
import React, { useContext } from "react";
import { MdDownloading, MdOutlineAddShoppingCart } from "react-icons/md";
import { Store } from "../../../Store";
import { saveAs } from "file-saver";
import "./style.css";

const Product = ({ product }) => {
  console.log(product);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    console.log(data);
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  const saveFile = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"
    );
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
        <a
          href={product.doc_url}
          download
          rel="noopener noreferrer"
          target="_blank"
        >
          {/* <a
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          download
        > */}
          <MdDownloading />
        </a>
      </div>
    </div>
  );
};

export default Product;
