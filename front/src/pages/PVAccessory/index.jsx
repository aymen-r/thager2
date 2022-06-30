import React, { useEffect, useReducer } from "react";
import logger from "use-reducer-logger";
import { getError } from "../../utils";
import axios from "axios";
import ProductsPages2 from "../ProductsPages2";
import "./style.css";
const solar = {
  pageTitle: "PV Accessory",
  images: [],
  filters: [
    {
      filter: "Middle Clamp",
    },
    {
      filter: "End Clamp",
    },
    {
      filter: "Main Beam",
    },
    {
      filter: "Hinged Joint",
    },
    {
      filter: "Hand Crimping tools",
    },
    {
      filter: "MC4 connector",
    },
    {
      filter: "Solar cable",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
const PVAccessory = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    loading: true,
    products: [],
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products/category/accessories");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: getError(error) });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <ProductsPages2 page={solar} prods={{ loading, products, error }} />
    </div>
  );
};

export default PVAccessory;
