import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Card sx={{ minHeight: 250, minWidth: 250 }}>
      <CardContent>
        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
          gutterBottom
        >
          Error
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
          Something went wrong:
        </Typography>
        <Typography variant="body2" align="center">
          {error.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center">
              <Button size="small" onClick={resetErrorBoundary}>
                Reset
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ErrorFallback;
