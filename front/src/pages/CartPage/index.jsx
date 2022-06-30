import React, { useContext } from "react";
import Layout from "../../components/Layout";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Store } from "../../Store";
import MessageBox from "../../components/MessageBox";

const CartPage = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    if (quantity < 1) {
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/");
  };

  return (
    <Layout>
      <div className="cart">
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <div class="CartContainer">
            <div class="Header">
              <h3 class="Heading">My Cart</h3>
            </div>
            {cartItems.map((item) => (
              <div key={item._id} class="Cart-Items">
                <div class="image-box">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ height: "120px" }}
                  />
                </div>
                <div class="about_cart">
                  <h1 class="title">{item.name}</h1>
                </div>
                <div class="counter_cart">
                  <div
                    aria-disabled
                    class="btn_cart"
                    onClick={() => updateCartHandler(item, item.quantity - 1)}
                  >
                    -
                  </div>
                  <div class="count">{item.quantity}</div>
                  <div
                    class="btn_cart"
                    onClick={() => updateCartHandler(item, item.quantity + 1)}
                  >
                    +
                  </div>
                </div>
                <div class="prices">
                  <div class="remove">
                    <u onClick={() => removeItemHandler(item)}>Remove</u>
                  </div>
                </div>
              </div>
            ))}

            <hr className="hr_cart" />
            <div class="checkout">
              <div class="total">
                <div>
                  <div class="items">{cartItems.length} items</div>
                </div>
              </div>
              <button onClick={checkoutHandler} class="button_cart">
                Get Quote
              </button>
            </div>
          </div>
        )}{" "}
      </div>
    </Layout>
  );
};

export default CartPage;
