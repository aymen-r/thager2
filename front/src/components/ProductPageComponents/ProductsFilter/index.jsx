import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./style.css";
// import SimpleAccordion from "../ProductAccordion";
import ProductsGallery from "../../ProductsGallery";
import { useEffect } from "react";
import LoadingBox from "../../LoadingBox";
import MessageBox from "../../MessageBox";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({ page, prods }) {
  const { loading, error, products } = prods;

  const [filterdProducts, setFilterdProducts] = React.useState(products);
  useEffect(() => {
    if (products.length > 0) {
      setFilterdProducts(products);
    }
  }, [products]);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [fixe, setFixe] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const changefilter = () => {
      if (window.scrollY >= 450) {
        setFixe(true);
      } else {
        setFixe(false);
      }
    };
    window.addEventListener("scroll", changefilter);
  }, []);

  return (
    <div className="filter">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position={fixe ? "fixed" : "absolute"}
          open={open}
          className={fixe ? "top145" : "top0"}
          sx={{ zIndex: 125568686, background: "#1c1c1c" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ margin: "0 auto" }}
            >
              {page.pageTitle}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              position: "absolute",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader
            position={fixe ? "fixed" : "absolute"}
            className={fixe ? "top145" : "top0"}
          >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon></ChevronLeftIcon>
              ) : (
                <ChevronRightIcon> </ChevronRightIcon>
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List className={fixe ? "top209" : "top0"}>
            {/* <SimpleAccordion filters={page.filters} /> */}{" "}
            {page.filters.map((el, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {page.pageTitle === "Solar Panels" ? (
                    <Typography
                      onClick={() => {
                        setFilterdProducts(
                          products.filter(
                            (e) =>
                              e.tag.toLowerCase() === el.filter.toLowerCase()
                          )
                        );
                      }}
                    >
                      {el.filter}
                    </Typography>
                  ) : (
                    <Typography
                      onClick={() => {
                        setFilterdProducts(
                          products.filter((e) => e.type === el.filter)
                        );
                      }}
                    >
                      {" "}
                      {el.filter}
                    </Typography>
                  )}
                </AccordionSummary>
                {el.subFilter && (
                  <AccordionDetails>
                    <Typography component="div">
                      <ul className="acc-list">
                        {el.subFilter.map((sub, idx) => (
                          <li
                            key={idx}
                            onClick={() => {
                              setFilterdProducts(
                                products.filter(
                                  (e) =>
                                    e.brand.toLowerCase() === sub.toLowerCase()
                                )
                              );
                            }}
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </Typography>
                  </AccordionDetails>
                )}
              </Accordion>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Typography component="div">
            {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox severity="error">{error}</MessageBox>
            ) : (
              <ProductsGallery products={filterdProducts} />
            )}
          </Typography>
        </Main>
      </Box>
    </div>
  );
}
