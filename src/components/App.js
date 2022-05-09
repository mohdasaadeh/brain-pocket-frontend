import React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import NavBar from "./NavBar";
import Home from "./Home";
import Lists from "./Lists";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lists" element={<Lists />}></Route>
        </Routes>
      </Container>
    </React.Fragment>
  );
};

export default App;
