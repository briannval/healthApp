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
import axios from "axios";

import { useState } from "react";

import gptUtil from "@/utils/gptUtil.ts"
import promptUtil from '@/utils/promptUtil.ts'

const schema = z.object({
  feeling: z
    .string()
    .refine((data) => parseInt(data) >= 1 && parseInt(data) <= 5, {
      message: "Input must be between 1 to 5",
    }),
  sleep: z.string().refine((data) => parseInt(data) >= 0, {
    message: "How can you sleep less than 0 hours?",
  }),
  description: z.string().min(1, { message: "Description cannot be empty" }),
  exercise: z.string(),
});

type Form = z.infer<typeof schema>;

const defaultTheme = createTheme();

export default function Create() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schema),
  });

  const [disableSubmit, setDisableSubmit] = useState(false);

  const onSubmit = async ({ feeling, sleep, description, exercise }: Form) => {
    try {
      setDisableSubmit(true);

      await gptUtil(promptUtil(sleep, exercise, feeling, description));

      const res = await axios.post("http://localhost:3000/api/logs/create", {
        feeling,
        sleep,
        description,
        exercise,
      });
      console.log(res);

      setDisableSubmit(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
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
                {errors.feeling && (
                  <Typography
                    variant="body1"
                    style={{ fontSize: 12, color: "red" }}
                  >
                    {errors.feeling.message}
                  </Typography>
                )}
                <TextField
                  margin="normal"
                  fullWidth
                  label="How many hours did you sleep?"
                  id="sleep"
                  type="number"
                  {...register("sleep")}
                />
                {errors.sleep && (
                  <Typography
                    variant="body1"
                    style={{ fontSize: 12, color: "red" }}
                  >
                    {errors.sleep.message}
                  </Typography>
                )}
                <TextField
                  margin="normal"
                  fullWidth
                  label="Tell us how you're feeling"
                  id="description"
                  multiline
                  rows={4}
                  {...register("description")}
                />
                {errors.description && (
                  <Typography
                    variant="body1"
                    style={{ fontSize: 12, color: "red" }}
                  >
                    {errors.description.message}
                  </Typography>
                )}
                <TextField
                  margin="normal"
                  fullWidth
                  label="Did you exercise today?"
                  id="exercise"
                  {...register("exercise")}
                />
                {errors.exercise && (
                  <Typography
                    variant="body1"
                    style={{ fontSize: 12, color: "red" }}
                  >
                    {errors.exercise.message}
                  </Typography>
                )}
                <Button
                  disabled={disableSubmit}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>

                <Typography
                  variant="body1"
                  id="gpt-response"
                >
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
