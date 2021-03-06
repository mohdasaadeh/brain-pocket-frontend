import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ErrorBoundary } from "react-error-boundary";

import useAuth from "../../hooks/useAuth";
import StyledNavBar from "./NavBar.styles";
import ErrorFallback from "../ErrorFallback";
import useEffectErrorHandler from "../../hooks/useEffectErrorHandler";

let pages = [];
let pagePaths = [];

const ResponsiveAppBar = () => {
  const user = useSelector(({ auth }) => auth);

  const { fetchUser } = useAuth();

  const [error] = useEffectErrorHandler(
    useCallback(async () => await fetchUser(), [fetchUser])
  );

  const renderLogin = () => {
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Button href="/api/user/login/google" color="inherit">
          LOGIN WITH GOOGLE
        </Button>
      </Box>
    );
  };

  const renderLogout = () => {
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Button href="/api/user/logout" color="inherit">
          LOGOUT
        </Button>
      </Box>
    );
  };

  const renderAuth = () => {
    switch (user) {
      case null:
        return renderLogin();
      case "out":
        return renderLogin();
      default:
        return renderLogout();
    }
  };

  (function renderPages() {
    if (!user || user === "out") return;

    pages = ["Lists"];
    pagePaths = ["/lists"];
  })();

  if (error) throw error;

  return (
    <StyledNavBar
      logo="BRAIN-POCKET"
      pages={pages}
      pagePaths={pagePaths}
      renderAuth={renderAuth}
    />
  );
};

const AppBarErrorBoundary = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ResponsiveAppBar />
    </ErrorBoundary>
  );
};

export default AppBarErrorBoundary;
