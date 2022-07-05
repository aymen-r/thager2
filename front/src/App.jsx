import React from "react";
import { Toaster } from "react-hot-toast";
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
import ContactUs from "./pages/ContactUs";
import TrackOrder from "./pages/TrackOrder";
import NewsPage from "./pages/NewsPage";
import ComingSoon from "./pages/ComingSoon";
import GetEstimate from "./pages/GetEstimate";
import AboutUs from "./pages/AboutUs";

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
          <Route exact path="/searching" element={<SearchResultPage />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/track_order" element={<TrackOrder />} />
          <Route exact path="/news_page" element={<NewsPage />} />
          <Route exact path="/on_the_way" element={<ComingSoon />} />
          <Route exact path="/get_estimate" element={<GetEstimate />} />
          <Route exact path="/about_us" element={<AboutUs />} />

          {/* <Route exact path="/admin" element={<Admin />} /> */}
        </Routes>
        <ScrollButton />
        <Toaster position="bottom-center" />
      </Router>
    </>
  );
};

export default App;
