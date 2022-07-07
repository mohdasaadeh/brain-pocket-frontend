import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Grid from "@mui/material/Grid";

import WordForm from "../forms/WordForm";
import { useWord } from "../../hooks/useWord";
import ErrorFallback from "../ErrorFallback";
import useAuthHandler from "../../hooks/useAuthHandler";

const CreateWordForm = () => {
  const [error, setError] = useState(null);

  useAuthHandler({ setError });

  const { createOriginalWord } = useWord();

  const navigate = useNavigate();

  const { listRelationId } = useParams();

  const onSubmit = async formValues => {
    try {
      await createOriginalWord(listRelationId, formValues);
    } catch (error) {
      setError(error);
    }
  };

  const onCancel = () => {
    navigate(`/lists/${listRelationId}`);
  };

  if (error) throw error;

  return <WordForm onSubmit={onSubmit} onCancel={onCancel} />;
};

const CreateList = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 align="center">Create a Word</h1>
      </Grid>
      <Grid item xs={12}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <CreateWordForm />
        </ErrorBoundary>
      </Grid>
    </Grid>
  );
};

export default CreateList;
