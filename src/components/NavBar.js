import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { fetchUser } from "../actions";
import StyledNavBar from "./NavBar.styles";

let pages = [];
let pagePaths = [];

const ResponsiveAppBar = () => {
  const user = useSelector(({ auth }) => auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const renderAuth = () => {
    switch (user) {
      case "out":
        return (
          <Box sx={{ flexGrow: 0 }}>
            <Button href="/api/user/login/google" color="inherit">
              LOGIN WITH GOOGLE
            </Button>
            <Button color="inherit">REGISTER</Button>
          </Box>
        );
      default:
        return (
          <Box sx={{ flexGrow: 0 }}>
            <Button href="/api/user/logout" color="inherit">
              LOGOUT
            </Button>
          </Box>
        );
    }
  };

  (function renderPages() {
    if (user === "out") return;

    pages = ["Lists"];
    pagePaths = ["/lists"];
  })();

  return (
    <StyledNavBar
      logo="BRAIN-POCKET"
      pages={pages}
      pagePaths={pagePaths}
      renderAuth={renderAuth}
    />
  );
};

export default ResponsiveAppBar;
