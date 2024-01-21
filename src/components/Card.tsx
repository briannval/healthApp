import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControlLabel, Rating } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

export interface Log {
  _id: string;
  date: string;
  feeling: string;
  sleep: string;
  description: string;
  exercise: string;
  userId: string;
}

export default function OutlinedCard(props: Log) {
  return (
    <Box sx={{ minWidth: 275, minHeight: 200 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {props.date}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Rating name="read-only" value={parseInt(props.feeling)} readOnly />
            <Typography variant="body2" sx={{ height: 90 }}>
              Description:
              <br />
              {props.description}
            </Typography>
            <Typography variant="body2" sx={{ height: 30 }}>
              Exercise:
              <br />
              {props.exercise}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Delete</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
