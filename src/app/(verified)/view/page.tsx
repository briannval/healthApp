"use client";
import AuthNavbar from "@/components/AuthNavbar";
import OutlinedCard from "@/components/Card";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";

export interface Log {
  _id: string;
  date: string;
  feeling: string;
  sleep: string;
  description: string;
  exercise: string;
  userId: string;
}

const View = () => {
  let datalogs: Log[];

  const getLogs = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/logs/view");
      datalogs = res.data.message;
      console.log(datalogs);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLogs();
  });

  return (
    <>
      <AuthNavbar />
      <Container maxWidth="md" sx={{ marginY: 5 }}>
        <Grid container spacing={10}>
          <Grid item xs={4}>
            <OutlinedCard />
          </Grid>
          <Grid item xs={4}>
            <OutlinedCard />
          </Grid>
          <Grid item xs={4}>
            <OutlinedCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default View;
