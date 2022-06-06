import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Grid from "@mui/material/Grid";

import ListForm from "../forms/ListForm";
import { useList } from "../../hooks/useList";
import ErrorFallback from "../ErrorFallback";

const CreateListForm = () => {
  const [error, setError] = useState(null);

  const { createList } = useList();

  const navigate = useNavigate();

  const onSubmit = async (formValues) => {
    const error = await createList(formValues);

    if (error) {
      setError(error);
    }
  };

  if (error) throw error;

  const onCancel = () => {
    navigate("/lists");
  };

  return <ListForm onSubmit={onSubmit} onCancel={onCancel} />;
};

const CreateList = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 align="center">Create a List</h1>
      </Grid>
      <Grid item xs={12}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <CreateListForm />
        </ErrorBoundary>
      </Grid>
    </Grid>
  );
};

export default CreateList;
