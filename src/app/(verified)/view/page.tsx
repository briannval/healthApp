"use client";
import AuthNavbar from "@/components/AuthNavbar";
import OutlinedCard from "@/components/Card";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";

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
  const [datalogs, setDatalogs] = useState([]);
  const [fetchdata, setFetchdata] = useState(false);

  const INITIAL_STATE = {
    loading: false,
    data: null,
  };

  interface ViewState {
    loading: boolean;
    data: Log[] | null;
  }

  type ViewAction = { type: "LOADING" } | { type: "GET"; data: Log[] };

  const reducer = (state: ViewState, action: ViewAction): ViewState => {
    switch (action.type) {
      case "LOADING":
        return {
          loading: true,
          data: null,
        };
      case "GET":
        return {
          loading: false,
          data: action.data,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const getLogs = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/logs/view");
      dispatch({ type: "GET", data: res.data.message });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLogs();
    dispatch({ type: "LOADING" });
  }, [fetchdata]);

  return (
    <>
      <AuthNavbar />
      <Container maxWidth="md" sx={{ marginY: 5 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          sx={{ marginBottom: 5 }}
        >
          Daily Logs
        </Typography>
        <Grid container spacing={10}>
          {state.data &&
            state.data.map((datalog) => (
              <Grid key={datalog._id} item xs={4} sx={{ marginBottom: -5 }}>
                <OutlinedCard {...datalog} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default View;
