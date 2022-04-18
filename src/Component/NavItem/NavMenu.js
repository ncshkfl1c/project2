import React from "react";
import style from "../Navbar.module.scss";
import clsx from "clsx";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";



const pages = ["Places to stay", "Experiences", "Online Experiences"];

function NavMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: {
          xs: "none",
          md: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {pages.map((page, index) => (
        <Link
          to={pages[index].replace(/\s/g, "")}
          className={clsx(style.reset)}
        >
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page}
          </Button>
        </Link>
      ))}
    </Box>
  );
}

export default NavMenu;
