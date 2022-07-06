import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Grid from "@mui/material/Grid";

import ListForm from "../forms/ListForm";
import { useList } from "../../hooks/useList";
import ErrorFallback from "../ErrorFallback";
import useAuthHandler from "../../hooks/useAuthHandler";

const CreateListForm = () => {
  const [error, setError] = useState(null);

  useAuthHandler({ setError });

  const { createList } = useList();

  const navigate = useNavigate();

  const onSubmit = async formValues => {
    try {
      await createList(formValues);
    } catch (error) {
      setError(error);
    }
  };

  const onCancel = () => {
    navigate("/lists");
  };

  if (error) throw error;

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
