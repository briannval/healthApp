"use client";

// KIAN'S EDITS (to keep track)
// added useState to disable Submit button while chat-gpt is being called
// edited onSubmit function to make call to chat-gpt
// added temporary <p> </p> at top as placeholder for chat-gpt output
// added disabled={disableSubmit} field to submit button

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthNavbar from "@/components/AuthNavbar";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import gptUtil from "./gptUtil.ts"
import promptUtil from './promptUtil.ts'

const schema = z.object({
  feeling: z
    .string()
    .refine((data) => parseInt(data) >= 1 && parseInt(data) <= 5, {
      message: "Input must be between 1 to 5",
    }),
  sleep: z.string(),
  description: z.string(),
  exercise: z.string(),
});

type Form = z.infer<typeof schema>;

const defaultTheme = createTheme();

export default function Create() {
  const { handleSubmit, register } = useForm<Form>({
    resolver: zodResolver(schema),
  });

  const [disableSubmit, setDisableSubmit] = useState(false);

  async function onSubmit(data: Form){
    console.log(data);
    setDisableSubmit(true);
    await gptUtil( promptUtil(data.sleep, data.exercise, data.feeling, data.description) );
    setDisableSubmit(false);
  };

  return (
    <>
      <p id="gpt-response"> (stuff goes here) </p>
      <AuthNavbar />
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <AccessibilityIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Health Report
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  label="How good are you today? (1-5)"
                  id="feeling"
                  type="number"
                  {...register("feeling")}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="How many hours did you sleep?"
                  id="sleep"
                  type="number"
                  {...register("sleep")}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Tell us how you're feeling"
                  id="description"
                  multiline
                  rows={4}
                  {...register("description")}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Did you exercise today?"
                  id="exercise"
                  {...register("exercise")}
                />
                <Button
                  disabled = {disableSubmit}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
