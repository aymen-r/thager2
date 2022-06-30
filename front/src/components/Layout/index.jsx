import React, { useEffect } from "react";
import NavDesktop from "../Navbar";
import Footer from "../footer2/Footer";

const Layout = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavDesktop />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
