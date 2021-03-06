import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../dummyData";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useReducer } from "react";
import logger from "use-reducer-logger";
import { getError } from "../../../utils";
import axios from "axios";
import { Store } from "../../../Store";

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

export default function ProductList() {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    loading: true,
    products: [],
    error: "",
  });
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
      return;
    } else {
      if (!userInfo.isAdmin) {
        navigate("/");
        return;
      } else {
        const fetchData = async () => {
          dispatch({ type: "FETCH_REQUEST" });
          try {
            const result = await axios.get("/api/products");
            dispatch({ type: "FETCH_SUCCESS", payload: result.data });
          } catch (error) {
            dispatch({ type: "FETCH_FAIL", payload: getError(error) });
          }
          // setProducts(result.data);
        };
        fetchData();
      }
    }
  }, [navigate, userInfo]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch({ type: "FETCH_REQUEST" });
  //     try {
  //       const result = await axios.get("/api/products");
  //       dispatch({ type: "FETCH_SUCCESS", payload: result.data });
  //     } catch (error) {
  //       dispatch({ type: "FETCH_FAIL", payload: getError(error) });
  //     }
  //     // setProducts(result.data);
  //   };
  //   fetchData();
  // }, []);

  const handleDelete = (id) => {
    products.filter((item) => item._id !== id);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 190 },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "category", headerName: "Category", width: 200 },
    { field: "type", headerName: "Type", width: 200 },
    { field: "tag", headerName: "Tag", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList ">
      <h1 className="header-dash">Products List</h1>
      <div className="actionsbox">
        <Link to={"/"}>
          <button className="productAddButton">home</button>{" "}
        </Link>{" "}
        <Link to={"/newproduct"}>
          <button className="productAddButton">Create new product</button>{" "}
        </Link>
      </div>

      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(r) => r._id}
      />
    </div>
  );
}
