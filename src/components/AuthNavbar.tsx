"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import axios from "axios";

function AuthNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/logout");
      window.location.href = "/";
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AppBar
      position="static"
      sx={{ mt: "-8px", width: "1500px", bgColor: "#609966" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/view"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Alleviate.
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Alleviate.
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              href="/create"
              onClick={handleCloseNavMenu}
              sx={{
                mx: 5,
                fontFamily: "monospace",
                color: "white",
                display: "block",
              }}
            >
              Log
            </Button>
            <Button
              href="/view"
              onClick={handleCloseNavMenu}
              sx={{
                mx: 5,
                fontFamily: "monospace",
                color: "white",
                display: "block",
              }}
            >
              View
            </Button>
            <Button
              href="/view"
              onClick={handleCloseNavMenu}
              sx={{
                mx: 5,
                fontFamily: "monospace",
                color: "white",
                display: "block",
              }}
            >
              Overall
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button sx={{ m: 1 }} variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AuthNavbar;
