"use client";

import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { playfair } from "./ui/fonts";
import Background from "@/components/Background";
import CssBaseline from "@mui/material";

function Landing() {
  return (
    <>
      <div className="container">
        <div>
          <p className="bigtext">
            {" "}
            Welcome to
            <br></br>
            Alleviate!{" "}
          </p>
          <p className="regulartext">
            <em>Your personal healthcare assistant.</em>
          </p>

          <div className="buttonRow">
            <Button href="/about" variant="outlined">
              Learn More{" "}
            </Button>
            <Button
              sx={{ marginLeft: 3 }}
              href="/auth/signup"
              variant="contained"
            >
              Get Started{" "}
            </Button>
          </div>
        </div>

        <style jsx>{`
          .container {
            margin: 50px;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 25px;
            height: 550px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .bigtext {
            color: white;
            font-size: 50px;
            font-weight: 800;
          }

          .regulartext {
            color: white;
            font-size: 25px;
            font-weight: 500;
          }

          .buttonRow {
            display: flex;
            width: 300px;
          }
        `}</style>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <div className={playfair.className}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Landing />
          </Grid>
        </Grid>
      </div>

      <Background />
    </>
  );
}
