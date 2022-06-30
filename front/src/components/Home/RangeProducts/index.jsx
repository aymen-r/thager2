import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ProductBlock from "./productBlock/ProductBlock";
import "./style.css";
import CountUp from "../Counter";
export const categories = [
  {
    id: 1,
    image: "/images-logos/panneaux-bg.jpg",
    title: "Solar Panels",
  },
  {
    id: 2,
    image: "/images-logos/onduleurs-bg.jpg",
    title: "Solar Inverters",
  },
  {
    id: 3,
    image: "/images-logos/batteries-bg.jpg",
    title: "Solar Batteries",
  },
  {
    id: 4,
    image: "/images-logos/combiner1.jpg",
    title: "PV Combiner Box",
  },
  {
    id: 5,
    image: "/images-logos/pv-accessory1.jpg",
    title: "PV Accessory",
  },
];

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "0%",
    paddingRight: "0%",
  },
});

const RangeProducts = () => {
  const classes = useStyles();
  return (
    <div
      className="container"
      style={{ backgroundColor: "#1c1c1c", paddingTop: "100px" }}
    >
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="start"
      >
        {categories.map((el) => (
          <Grid item xs={12} sm={6} md={4}>
            <ProductBlock key={el.id} element={el} />
          </Grid>
        ))}
      </Grid>
      {/* <div class="text-wrap">
        <p className="text-base">
          WE offers a complete range of photovoltaic inverters for your solar
          panels at the best prices. You want to buy your inverter, benefit from
          the best prices, the best warranty and flexible delivery? Then chose
          the No1 of photovoltaic products. These solar inverters
        </p>
      </div> */}
      {/* <CountUp /> */}
      <div className="more-accessories">
        <p className="text-base">
          Our product catalogue contains also - high-quality structure &
          protection and complete fixing tools, and any kind of PV accessories
          such as cables, connectors, etc. <br /> Here you will find the right
          products for your photovoltaic system. Order and book products now in
          the easiest way with{" "}
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {" "}
            Thager alrafedain
          </span>
        </p>
        <button>Get more PV accessory</button>
      </div>
    </div>
  );
};

export default RangeProducts;
