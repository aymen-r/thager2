import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./nav2.css";

import { AiOutlineGlobal, AiFillCaretRight } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import SearchBox from "./SearchBox";
import Badge from "@mui/material/Badge";

import { HiOutlineShoppingCart } from "react-icons/hi";

// submenu
import image1 from "../Home/ProdSolutionSlides/solar-energy-panel.svg";
import image2 from "../Home/ProdSolutionSlides/icons8.png";
import image3 from "../Home/ProdSolutionSlides/setting.svg";
import image5 from "../Home/ProdSolutionSlides/solar-energy.svg";
import { GiStreetLight } from "react-icons/gi";
import { MdConstruction } from "react-icons/md";

import trackImg from "./order-tracking.png";
import estimateImg from "./budget.png";
import folderImg from "./folder.png";
import { useContext } from "react";
import { Store } from "../../Store";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ResponsiveNav from "./ResponsiveNav/ResponsiveNav";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -15,
    top: -2,
    // border: `2px solid ${theme.palette.background.paper}`,
    padding: " 8px",
    background: "#ffce34",
    color: "black",
    fontSize: "15px",
  },
}));

const NavDesktop = () => {
  const [stick, setStick] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);

  // reducer part
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");

    window.location.href = "/login";
  };

  // stick navbar part
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setStick(true);
    } else {
      setStick(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <div className={stick ? "navbar sticky" : "navbar"}>
        <ResponsiveNav actions={{ userInfo, cart }} />
        <nav className="navbar-one flex">
          <div className="left flex">
            <Link to={"/"}>
              <div className="logo">
                <img src="/logo1.png" alt="" />
              </div>
            </Link>
          </div>
          <SearchBox />
          <div className="right flex">
            <div className="nav-link-top flex">
              <RiProfileLine
                style={{ fontSize: "30px", color: "#ccc !important" }}
              />
              <span>About Us</span>
            </div>
            <div
              className="nav-link-top flex lang"
              onClick={() => setOpen(!open)}
            >
              <AiOutlineGlobal
                style={{ fontSize: "30px", color: "#ccc !important" }}
              />
              <span>Language</span>

              <IoIosArrowDown />
              <ul
                className={open ? "language-list lang-open" : "language-list"}
              >
                <li className="language-item">English</li>
                <li className="language-item">French</li>
                <li className="language-item">Arabic</li>
              </ul>
            </div>
            <div className="nav-link-top">
              <Link to="/cart" className="nav-link">
                {/* <Badge badgeContent={4} color="primary">
                  <HiOutlineShoppingCart style={{ fontSize: "25px" }} />
                </Badge> */}
                <IconButton aria-label="cart">
                  <StyledBadge
                    badgeContent={cart.cartItems.reduce(
                      (a, c) => a + c.quantity,
                      0
                    )}
                  >
                    <HiOutlineShoppingCart
                      style={{ fontSize: "30px", color: "rgb(204, 204, 204)" }}
                    />
                  </StyledBadge>
                </IconButton>
              </Link>
            </div>
            <div className="nav-link-top">
              {userInfo ? (
                <div
                  className="nav-link-top flex lang"
                  onClick={() => setOpenAccount(!openAccount)}
                >
                  <span>{userInfo.name}</span>

                  <IoIosArrowDown />
                  <ul
                    className={
                      openAccount ? "language-list lang-open" : "language-list"
                    }
                  >
                    {userInfo.isAdmin && (
                      <Link to={"/admin_products"}>
                        <li className="language-item">Dashboard</li>
                      </Link>
                    )}
                    <li className="language-item" onClick={signoutHandler}>
                      Logout
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to={"/login"}>
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </nav>
        <nav className="nav-bar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to={"/"} className="active">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={"/products"}>
                Products & Solutions <i className="fa-solid fa-angle-down"></i>
              </Link>
              <div className="mega-menu">
                <ul className="inner-mega-menu">
                  <Link to={"/solarPanels"}>
                    <li className="inner-item">
                      <img className="menu-image" src={image1} alt="" />
                      <p> Solar Panels</p>
                      <ul className="innermenu2">
                        <li className="innermenu2-item">Half Cell</li>
                        <li className="innermenu2-item">Bifacial</li>
                      </ul>
                      <AiFillCaretRight className="right-arrow" />
                    </li>
                  </Link>
                  <Link to={"/solarInverters"}>
                    <li className="inner-item">
                      <img className="menu-image" src={image2} alt="" />
                      <p>Solar Inverters</p>
                      <ul className="innermenu2">
                        <li className="innermenu2-item">Off Grid</li>
                        <li className="innermenu2-item">On Grid</li>
                        <li className="innermenu2-item">Pump</li>
                      </ul>
                      <AiFillCaretRight className="right-arrow" />
                    </li>
                  </Link>
                  <Link to={"/solarBatteries"}>
                    <li className="inner-item">
                      <img className="menu-image" src={image5} alt="" />
                      <p>Solar Batteries</p>
                      <ul className="innermenu2">
                        <li className="innermenu2-item">AGM Batteries</li>
                        <li className="innermenu2-item">Lithium Batteries</li>
                        <li className="innermenu2-item">Gel Batteries</li>
                        <li className="innermenu2-item">Tubular Battery</li>
                      </ul>
                      <AiFillCaretRight className="right-arrow" />
                    </li>
                  </Link>
                  <Link to={"/street_lights"}>
                    <li className="inner-item">
                      <GiStreetLight className="menu-image" />
                      <p>Solar Street Lights</p>
                    </li>
                  </Link>

                  <Link to={"/Pv_combiner_Box"}>
                    <li className="inner-item">
                      {" "}
                      <img className="menu-image" src={image3} alt="" />
                      <p> PV COMBINER BOX & CABLES</p>
                    </li>
                  </Link>
                  <Link to={"/PV_Accessory"}>
                    <li className="inner-item">
                      <MdConstruction className="menu-image" />
                      <p> STRUCTURE & FIXING</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </li>

            <li className="navbar-item">
              <a href="#s">ON the Way</a>
            </li>

            <li className="navbar-item">
              {" "}
              <a href="#s">Service & Support</a>
              <i className=" fa-solid fa-angle-down"></i>
              <div
                className="mega-menu"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: "30px",
                }}
              >
                <div className="inner-mega-menu-item">
                  <img src={estimateImg} alt="" />
                  <p>Get an estimate</p>
                </div>
                <div className="inner-mega-menu-item">
                  <img src={trackImg} alt="" />
                  <p>Track your order</p>
                </div>
                <div className="inner-mega-menu-item">
                  <img src={folderImg} alt="" />
                  <p>Downland data sheet</p>
                </div>
              </div>
            </li>
            <li className="navbar-item">
              <a href="#s">News & Videos</a>
            </li>
            <li className="navbar-item">
              <a href="#s">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavDesktop;
