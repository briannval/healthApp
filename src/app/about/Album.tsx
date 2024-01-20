import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const cards = [1, 2, 3];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        pt: 8,
                        pb: 6,
                        height: "60vh",
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            About Us
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Established in 2024, we believe that people in a new age deserve a new
                            way of diagnosis.
                        </Typography>
                        <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                            <Button variant="contained">Get Started</Button>
                            <Button variant="outlined">Frequently Asked Questions</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Typography
                        component="h3"
                        variant="h4"
                        align="left"
                        color="text.secondary"
                        gutterBottom
                    >
                        Our Services
                    </Typography>

                    <Divider variant="inset" sx={{ mb: 4 }} />

                    <Grid container spacing={4}>
                        {/*  FIRST CARD */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: "56.25%",
                                    }}
                                    image={require("./images/yoga.jpg")}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Accurate Diagnosis
                                    </Typography>
                                    <Typography>
                                        State-of-the-art AI algorithms guarantee precise feedback
                                        based on user descriptions.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/*  SECOND CARD */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: "56.25%",
                                    }}
                                    image={require("./images/yoga.jpg")}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe
                                        the content.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/*  THIRD CARD */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: "56.25%",
                                    }}
                                    image={require("./images/yoga.jpg")}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe
                                        the content.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}
