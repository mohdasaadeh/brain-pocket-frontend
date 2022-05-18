import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

import ListForm from "../forms/ListForm";
import { useList } from "../../hooks/useList";

const CreateList = () => {
  const { createList } = useList();

  const navigate = useNavigate();

  const onSubmit = (formValues) => {
    createList(formValues);
  };

  const onCancel = () => {
    navigate("/lists");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 align="center">Create a List</h1>
      </Grid>
      <Grid item xs={12}>
        <ListForm onSubmit={onSubmit} onCancel={onCancel} />
      </Grid>
    </Grid>
  );
};

export default CreateList;
