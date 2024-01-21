"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./Navbar";

const defaultTheme = createTheme();

export default function Album() {
  return (
    <>
      <Navbar />
      <ThemeProvider theme={defaultTheme}>
        <main>
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 2,
              height: "25vh",
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
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Established in 2024, we believe that people in a new age deserve
                a new way of diagnosis.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">Get Started</Button>
              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
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
                    image="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/02/lymphocytic_leukemia_GettyImages828073656_Header-1024x575.jpg?w=1155&h=1528"
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
                    image="https://static.vecteezy.com/system/resources/previews/024/084/492/large_2x/black-and-white-image-of-human-hands-typing-on-laptop-keyboard-at-desk-in-office-or-home-generative-ai-technology-photo.jpg"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Daily Logs
                    </Typography>
                    <Typography>
                      Encourages user's consistency in logging health conditions
                      daily for health monitoring
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
                    image="https://d39l2hkdp2esp1.cloudfront.net/img/photo/197125/197125_00_2x.jpg?20191229000546"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Tracking System
                    </Typography>
                    <Typography>
                      Users are able to view their logs and review their health
                      conditions
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
}
