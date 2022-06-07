import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import _ from "lodash";
import Grid from "@mui/material/Grid";
import { ErrorBoundary } from "react-error-boundary";

import ListForm from "../forms/ListForm";
import { useList } from "../../hooks/useList";
import ErrorFallback from "../ErrorFallback";

const EditListForm = () => {
  const [error, setError] = useState(null);

  const { fetchList, editList } = useList();

  const { id } = useParams();

  const navigate = useNavigate();

  const list = useSelector(({ lists }) => {
    if (!lists) return null;

    return Object.values(lists).find((list) => {
      return list._id === id;
    });
  });

  useEffect(() => {
    const asyncUseEffect = async () => {
      try {
        await fetchList(id);
      } catch (error) {
        setError(error);
      }
    };

    asyncUseEffect();
  }, []);

  const onSubmit = async (formValues) => {
    try {
      await editList(formValues, id);
    } catch (error) {
      setError(error);
    }
  };

  const onCancel = () => {
    navigate(`/lists/${id}`);
  };

  if (error) throw error;

  return (
    <ListForm
      onSubmit={onSubmit}
      onCancel={onCancel}
      initialValues={
        list
          ? _.pick(
              list.listId,
              "title",
              "firstColumnTitle",
              "secondColumnTitle"
            )
          : {}
      }
    />
  );
};

const EditList = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 align="center">List Edit</h1>
      </Grid>
      <Grid item xs={12}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <EditListForm />
        </ErrorBoundary>
      </Grid>
    </Grid>
  );
};

export default EditList;
