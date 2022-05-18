import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import _ from "lodash";
import Grid from "@mui/material/Grid";

import ListForm from "../forms/ListForm";
import { useList } from "../../hooks/useList";

const EditList = () => {
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
    fetchList(id);
  }, []);

  const onSubmit = (formValues) => {
    editList(formValues, id);
  };

  const onCancel = () => {
    navigate(`/lists/${id}`);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 align="center">List Edit</h1>
      </Grid>
      <Grid item xs={12}>
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
      </Grid>
    </Grid>
  );
};

export default EditList;
