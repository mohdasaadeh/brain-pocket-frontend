import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

import ListForm from "./ListForm/ListForm";
import { createList } from "../actions";

const CreateList = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (formValues) => {
    dispatch(createList(formValues));

    navigate("/lists");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 align="center">Create a List</h1>
      </Grid>
      <Grid item xs={12}>
        <ListForm onSubmit={onSubmit} />
      </Grid>
    </Grid>
  );
};

export default CreateList;
