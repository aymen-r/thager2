import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Store } from "../../../Store";
import "./responsiveNavbar.css";
import { IoIosArrowDown } from "react-icons/io";

import Badge from "@mui/material/Badge";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBox from "../SearchBox";
import { AiFillCaretRight } from "react-icons/ai";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const ResponsiveNav = () => {
  const [open, setOpen] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");

    window.location.href = "/login";
  };
  return (
    <div className="rs-nav">
      <Link to={"/"}>
        <div className="res-image">
          <img src="/logo1.png" alt="" />
        </div>
      </Link>
      <div className="rs-right">
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
        {userInfo ? (
          <div
            className=" flex lang"
            onClick={() => setOpenAccount(!openAccount)}
          >
            <span>{userInfo.name}</span>

            {/* <IoIosArrowDown style={{ fontSize: "15px" }} /> */}
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

        <GiHamburgerMenu
          onClick={() => setOpen(!open)}
          style={{ fontSize: "25px", margin: "0 10px" }}
        />
      </div>
      <div className={open ? "rs-menu rs-menu-open" : "rs-menu rs-menu-close"}>
        <SearchBox />
        <ul className="responsive-menu">
          <li className="responsive-menu-item">
            <Link to={"/"} className="active">
              Home
            </Link>
          </li>
          <li className="responsive-menu-item Prds">
            <Accordion
              sx={{
                backgroundColor: "transparent",
                color: "#ccc",
                boxShadow: "none",
                minHeight: "35px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ fontSize: "2rem !important", padding: "0" }}
              >
                <Typography>Products & Solutions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul className="inner-responsive-menu">
                    <Link to={"/solarPanels"}>
                      <li className="inner-responsive-menu-item">
                        <p>Solar Panels</p>
                        <ul className="innermenu2">
                          <li className="innermenu2-item">Half Cell</li>
                          <li className="innermenu2-item">Bifacial</li>
                        </ul>
                        <AiFillCaretRight className="right-arrow" />
                      </li>
                    </Link>
                    <Link to={"/solarInverters"}>
                      <li className="inner-responsive-menu-item">
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
                      <li className="inner-responsive-menu-item">
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
                      <li className="inner-responsive-menu-item">
                        <p>Solar Street Lights</p>
                      </li>
                    </Link>

                    <Link to={"/Pv_combiner_Box"}>
                      <li className="inner-responsive-menu-item">
                        <p> PV COMBINER BOX & CABLES</p>
                      </li>
                    </Link>
                    <Link to={"/PV_Accessory"}>
                      <li className="inner-responsive-menu-item">
                        <p> STRUCTURE & FIXING</p>
                      </li>
                    </Link>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </li>

          <li className="responsive-menu-item">
            <a href="#s">On the Way</a>
          </li>

          <li className="responsive-menu-item">
            <Accordion
              sx={{
                backgroundColor: "transparent",
                color: "#ccc",
                boxShadow: "none",
                minHeight: "35px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  fontSize: "2rem !important",
                  padding: "0",
                }}
              >
                <Typography>Service & Support</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="inner-responsive-menu-item">
                    <p>Get an estimate</p>
                  </div>
                  <div className="inner-responsive-menu-item">
                    <p>Track your order</p>
                  </div>
                  <div className="inner-responsive-menu-item">
                    <p>Downland data sheet</p>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
          </li>
          <li className="responsive-menu-item">
            <a href="#s">News & Videos</a>
          </li>
          <li className="responsive-menu-item">
            <a href="#s">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveNav;
