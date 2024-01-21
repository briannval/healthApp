"use client";

import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import { playfair } from './ui/fonts';
import Background from "@/components/Background";

function Landing(){
  return(
    <>
      <div className="container">
        <div>
          <p className="bigtext"> Welcome to (name)! </p>
          <p className="regulartext"><em>(insert tagline here)</em></p>
          
          <div className="buttonRow">
            <Button href="/about" variant="outlined">Learn More </Button>
            <Button href="/auth/signup" variant="contained">Get Started </Button>
          </div>
        </div>

        <style jsx>{`
          .container {
            margin: 50px;
            background-color: rgba(0,0,0,0.3);
            border-radius: 25px;
            height: 550px;
            display:flex;
            justify-content:center;
            align-items:center;
          }

          .bigtext{
            color: white;
            font-size: 50px;
            font-weight: 800;
          }

          .regulartext{
            color: white;
            font-size: 25px;
            font-weight: 500;
          }

          .buttonRow{
            display: flex;
            width: 300px;
            justify-content: space-between;
          }

        `}</style>
      </div>
    </>
  );
}
export default function Home() {
  return(
    <>
      <div className={playfair.className}>
        <Grid container spacing={2} >
          <Grid item xs={6}>
            <Landing />
          </Grid>
          <Grid item>
            (placeholder)
          </Grid>
        </Grid>
      </div>

      <Background />
    </>
  );
}
