import React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Header from "./Header";
import Home from "./Home";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Container>
    </React.Fragment>
  );
};

export default App;
