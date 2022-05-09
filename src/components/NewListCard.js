import React, { useEffect } from "react";
import { green } from "@mui/material/colors";
import { loadCSS } from "fg-loadcss";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

const BasicCard = () => {
  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      document.querySelector("#font-awesome-css") || document.head.firstChild
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <Grid item xs={3}>
      <Typography sx={{ minHeight: 250 }}>
        <Button sx={{ color: green[500], minHeight: 250 }} fullWidth>
          <Icon
            baseClassName="fas"
            className="fa-plus-circle"
            sx={{ fontSize: 100 }}
          />
        </Button>
      </Typography>
    </Grid>
  );
};

export default BasicCard;
