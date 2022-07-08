import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { ErrorBoundary } from "react-error-boundary";

import WordForm from "../forms/WordForm";
import { useWord } from "../../hooks/useWord";
import ErrorFallback from "../ErrorFallback";
import useAuthHandler from "../../hooks/useAuthHandler";

const EditWordForm = () => {
  const [error, setError] = useState(null);

  useAuthHandler({ setError });

  const { fetchOriginalWord, editOriginalWord } = useWord();

  const { listRelationId, id } = useParams();

  const navigate = useNavigate();

  const originalWord = useSelector(({ originalWords }) => {
    if (!originalWords) return null;

    return Object.values(originalWords).find(originalWord => {
      return originalWord._id === id;
    });
  });

  useEffect(() => {
    const asyncUseEffect = async () => {
      try {
        await fetchOriginalWord(listRelationId, id);
      } catch (error) {
        setError(error);
      }
    };

    asyncUseEffect();
  }, [fetchOriginalWord, listRelationId, id]);

  const onSubmit = async formValues => {
    try {
      await editOriginalWord(formValues, listRelationId, id);
    } catch (error) {
      setError(error);
    }
  };

  const onCancel = () => {
    navigate(`/lists/${listRelationId}`);
  };

  if (error) throw error;

  return (
    <WordForm
      onSubmit={onSubmit}
      onCancel={onCancel}
      initialValues={
        originalWord
          ? {
              firstColumnWord: originalWord.firstWordId.word,
              secondColumnWord: originalWord.secondWordId.word,
              thirdColumnWord: originalWord.thirdWordId.word
            }
          : {}
      }
    />
  );
};

const EditWord = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 align="center">Word Edit</h1>
      </Grid>
      <Grid item xs={12}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <EditWordForm />
        </ErrorBoundary>
      </Grid>
    </Grid>
  );
};

export default EditWord;
