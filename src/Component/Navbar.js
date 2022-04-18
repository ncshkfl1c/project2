import React, { useState, useEffect } from "react";
import NavMenu from "./NavItem/NavMenu";
import SearchBar from "./NavItem/SearchBar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import clsx from "clsx";
import style from "./Navbar.module.scss";

const pages = ["Places to stay", "Experiences", "Online Experiences"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [color, setColor] = React.useState("black");
  const [textColor, setTextColor] = React.useState("white");
  const [show, setShow] = React.useState(true);
  const [showWidth, setShowWidth] = React.useState(true);
  const [showMinWidth, setMinWidth] = React.useState(true);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1000) {
      setShowWidth(false);
      if (window.innerWidth < 780) {
        setMinWidth(false);
      } else {
        setMinWidth(true);
      }
    } else if (window.innerWidth >= 1000) {
      setShowWidth(true);
    }
    console.log(showMinWidth);

    console.log(showWidth);
  });

  const changeColor = (e) => {
    if (window.scrollY > 0) {
      setTextColor("black");
      setColor("white");
      setShow(false);
    }
    if (window.scrollY === 0) {
      setTextColor("white");
      setColor("black");
      setShow(true);
    }
  };
  window.addEventListener("scroll", changeColor);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: color, p: "5px" }}>
      <Container maxWidth="x1">
        <Toolbar
          disableGutters
          sx={{ mx: "5vw", justifyContent: "space-between" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "White" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: "flex" }}
              style={{ alignItems: "center" }}
            >
              {showMinWidth && (
                <i
                  style={
                    show === true
                      ? {
                          fontSize: "50px",
                          marginRight: "20px",
                          color: "white",
                        }
                      : {
                          fontSize: "50px",
                          marginRight: "20px",
                          color: "#ff385c",
                        }
                  }
                  class="fa-brands fa-airbnb"
                ></i>
              )}

              {show && showWidth && "AirBnb"}
              {/* {(show && showWidth) ||
                (!showMinWidth && show && <SearchBar status={showMinWidth} />)} */}
            </Typography>
          </Link>

          {show && <NavMenu />}
          {!show && <SearchBar status={showMinWidth} />}

          {/* avatar */}
          {showMinWidth && (
            <Box
              sx={{
                flexGrow: 0.05,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link to="/" className={clsx(style.reset)}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: textColor,
                    borderRadius: "10px",
                    p: "0px 15px",
                  }}
                  style={
                    show && showWidth
                      ? { dispay: "block" }
                      : { display: "none" }
                  }
                  className={clsx(style.backGroundHover)}
                >
                  Become a host
                </Button>
              </Link>
              <Tooltip>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
