import * as React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Paper square sx={{ height: "90%" }}>
      <Typography variant="h2" align="center" sx={{ paddingTop: "15%" }}>
        Page Not Found!
      </Typography>
      <Typography align="center">
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <Button size="large">Go Home</Button>
        </Link>
      </Typography>
    </Paper>
  );
}

export default NotFound;
