import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";
import { loadCSS } from "fg-loadcss";
import Icon from "@mui/material/Icon";
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
    <Typography sx={{ minHeight: 250, minWidth: 250 }}>
      <Link to={"/lists/new"} style={{ textDecoration: "none" }}>
        <Button sx={{ color: green[500], minHeight: 250 }} fullWidth>
          <Icon
            baseClassName="fas"
            className="fa-plus-circle"
            sx={{ fontSize: 100 }}
          />
        </Button>
      </Link>
    </Typography>
  );
};

export default BasicCard;
