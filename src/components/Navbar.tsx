"use client";

import * as React from "react";
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
import AdbIcon from "@mui/icons-material/Adb";
import createTheme from "@mui/material/styles/createTheme";
import Paper from "@mui/material/Paper";
import { BorderAllRounded, Height } from "@mui/icons-material";
import Image from "next/image";

const theme = createTheme({
    palette: {
        background: {
            default: "#F7F9FC",
        },
        primary: {
            main: "#ff0000",
        },
    },
});

const pages = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/about",
    },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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

    return (
        <AppBar
            position="static"
            sx={{
                color: "#40513B",
                height: "10vh",
                bgcolor: "#609966",
                width: "100%",
                borderRadius: 20,
                marginLeft: "20px",
                marginRight: "20px",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image
                        alt="person typing on laptop; sthetoscope visible"
                        src="/photos/alleviate_logo.jpg"
                        width={60}
                        height={60}
                        style={{ borderRadius: "30%" }}
                    />
                    {/* Text Logo */}
                    {/* <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/"
                      sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "playFair",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      LOGO
                    </Typography> */}

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button
                                href={page.href}
                                key={page.title}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontFamily: "playFair",
                                    fontSize: "large",
                                    fontWeight: "100",
                                }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button sx={{ m: 1 }} variant="contained" href="/auth/login">
                            Login
                        </Button>
                        <Button
                            sx={{ m: 1, color: "#40513B", bgcolor: "#EDF1D6" }}
                            variant="contained"
                            href="/auth/signup"
                        >
                            Sign up
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
