import React, { useEffect, useReducer } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../components/Layout";
import "./style.css";
import { getError } from "../../utils";

import ProductsGallery from "../../components/ProductsGallery";
import Product from "../../components/ProductsGallery/Product";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
        countProducts: action.payload.countProducts,
        loading: false,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const SearchResultPage = () => {
  const par = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search); // /search?category=Shirts
  const query = sp.get("query") || "all";
  const page = sp.get("page") || 1;
  console.log(search);
  console.log(query);
  console.log(sp);
  console.log("par ", par);
  const [{ loading, error, products, pages, countProducts }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: "",
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/products/search?page=${page}&query=${query}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [error, page, query]);
  console.log(products);

  // const getFilterUrl = (filter) => {
  //   const filterPage = filter.page || page;
  //   const filterQuery = filter.query || query;

  //   return `/search?query=${filterQuery}&page=${filterPage}`;
  // };
  products && console.log(products[0].image);
  return (
    <Layout>
      <div className="searchpage">
        <h1>Search result</h1>
        {/* <img
          src="/uploads/2022-07-05T07-04-55.507Z-bateria-agm-upower-up-tfs-250ah-12v.jpg"
          alt=""
        /> */}
        {countProducts === 0 ? "No" : countProducts} Results
        {/* {!loading &&
          products.map((el) => <img src={el.image} key={el._id} alt="uu" />)} */}
        {!loading && <ProductsGallery products={products} />}
      </div>
    </Layout>
  );
};

export default SearchResultPage;
