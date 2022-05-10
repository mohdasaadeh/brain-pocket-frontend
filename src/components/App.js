import React from "react";
import { Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import NavBar from "./NavBar";
import Home from "./Home";
import Lists from "./Lists";
import ShowList from "./ShowList";
import CreateList from "./CreateList";
import EditList from "./EditList";
import DeleteList from "./DeleteList";

let history = createBrowserHistory();

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lists" element={<Lists />}></Route>
          <Route path="/lists/new" element={<CreateList />}></Route>
          <Route path="/lists/:id" element={<ShowList />}></Route>
          <Route path="/lists/:id/edit" element={<EditList />}></Route>
          <Route path="/lists/:id/delete" element={<DeleteList />}></Route>
        </Routes>
      </Container>
    </React.Fragment>
  );
};

export default App;
