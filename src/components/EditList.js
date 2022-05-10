import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import _ from "lodash";
import Grid from "@mui/material/Grid";

import ListForm from "./ListForm/ListForm";
import { fetchList, editList } from "../actions";
import { useCreateList } from "../hooks";

const EditList = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const navigate = useNavigate();

  const list = useSelector(({ lists }) => {
    if (!lists) return null;

    return Object.values(lists).find((list) => {
      return list._id === id;
    });
  });

  useEffect(() => {
    dispatch(fetchList(id));
  }, []);

  const onSubmit = (formValues) => {
    dispatch(editList(formValues, id));

    navigate("/lists");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 align="center">List Edit</h1>
      </Grid>
      <Grid item xs={12}>
        <ListForm
          onSubmit={onSubmit}
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
