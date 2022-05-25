import React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "./NavBar";
import Home from "./Home";
import ListsMenu from "./lists/ListsMenu";
import ShowList from "./lists/ShowList";
import CreateList from "./lists/CreateList";
import EditList from "./lists/EditList";
import DeleteList from "./lists/DeleteList";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<ListsMenu />} />
        <Route path="/lists/new" element={<CreateList />} />
        <Route path="/lists/:id" element={<ShowList />} />
        <Route path="/lists/:id/edit" element={<EditList />} />
        <Route path="/lists/:id/delete" element={<DeleteList />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
