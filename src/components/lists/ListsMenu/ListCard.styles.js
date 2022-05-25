import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const BasicCard = ({ id, title, wordsCount }) => {
  return (
    <Card sx={{ minHeight: 250, minWidth: 250 }}>
      <CardContent>
        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
          gutterBottom
        >
          Title
        </Typography>
        <Typography variant="h5" align="center">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
          Total Words
        </Typography>
        <Typography variant="body2" align="center">
          {wordsCount}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
              Due Words
            </Typography>
            <Typography variant="body2" align="center">
              {wordsCount}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
              New Words
            </Typography>
            <Typography variant="body2" align="center">
              {wordsCount}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center">
              <Link to={`/lists/${id}`} style={{ textDecoration: "none" }}>
                <Button size="small">Show</Button>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
