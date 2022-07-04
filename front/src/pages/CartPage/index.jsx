import React, { useContext, useState } from "react";
import Layout from "../../components/Layout";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Store } from "../../Store";
import MessageBox from "../../components/MessageBox";
import toast from "react-hot-toast";

const CartPage = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
    userInfo,
  } = state;
  console.log(userInfo);
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

  const checkoutHandler = async (e) => {
    e.preventDefault();
    if (!userInfo) {
      navigate("/login");
      return;
    }
    const info = {
      name: userInfo.name,
      email: userInfo.email,
      phone,
      cartItems,
    };
    if (phone === "") {
      toast.error("enter valid phone number");
      return;
    }
    try {
      await axios.post("/api/contact/quote", info);
      toast.success(
        "thanks for your order. \nwe will begin processing shortly you will receive an invoice in your email and one of our team will contact you as soon as possible",
        { duration: 4000 }
      );
    } catch (error) {
      toast.error(error);
    }
    navigate("/");
  };

  return (
    <Layout>
      <div className="cart">
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <>
            <div class="CartContainer">
              <div class="Header">
                <h3 class="Heading">My Cart</h3>
              </div>
              {cartItems.map((item) => (
                <div key={item._id} class="Cart-Items">
                  <div class="image-box">
                    <img src={item.image} alt={item.name} />
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
              <div class="total">
                <div>
                  <div class="items">{cartItems.length} items</div>
                </div>
              </div>
              <hr className="hr_cart" />
              <div class="checkout">
                <h2>Get your instant quote in minutes </h2>
                <form onSubmit={checkoutHandler}>
                  <input
                    className="phone_cart"
                    type="number"
                    placeholder="insert your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />{" "}
                  <button class="button_cart">Get Quote</button>
                </form>
              </div>
            </div>
          </>
        )}{" "}
      </div>
    </Layout>
  );
};

export default CartPage;
