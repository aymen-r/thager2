import React from "react";

import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./pages/Home";
// import ProductsPage from "./pages/ProductsPage";
import ScrollButton from "./components/Home/ScrollToTop";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// import ProductsPages2 from "./pages/ProductsPages2";
import SolarPanels from "./pages/SolarPanels";
import Inverters from "./pages/Inverters";
import SolarBatteries from "./pages/SolarBatteries";
import PVCombinerBox from "./pages/PVCombinerBox";
import PVAccessory from "./pages/PVAccessory";
import SolarStreetLights from "./pages/SolarStreetLights";
import SearchPage from "./pages/SeachSolar/SearchPage";
import CartPage from "./pages/CartPage";
import Admin from "./pages/adminPage/Admin";
import Product from "./pages/adminPage2/product/Product";
import NewProduct from "./pages/adminPage2/newProduct/NewProduct";
import ProductList from "./pages/adminPage2/productList/ProductList";
import SearchResultPage from "./pages/SearchResultPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<SolarPanels />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/solarPanels" element={<SolarPanels />} />
          <Route exact path="/solarInverters" element={<Inverters />} />
          <Route exact path="/solarBatteries" element={<SolarBatteries />} />
          <Route exact path="/Pv_combiner_Box" element={<PVCombinerBox />} />
          <Route exact path="/PV_Accessory" element={<PVAccessory />} />
          <Route exact path="/street_lights" element={<SolarStreetLights />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/admin_product" element={<Product />} />
          <Route exact path="/admin_products" element={<ProductList />} />
          <Route exact path="/newproduct" element={<NewProduct />} />
          <Route exact path="/Search" element={<SearchResultPage />} />
          {/* <Route exact path="/admin" element={<Admin />} /> */}
        </Routes>
        <ScrollButton />
      </Router>
    </>
  );
};

export default App;