import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { ErrorBoundary } from "react-error-boundary";

import { useList } from "../../../hooks/useList";
import useEffectErrorHandler from "../../../hooks/useEffectErrorHandler";
import StyledListCard from "./ListCard.styles";
import StyledNewListCard from "./NewListCard.styles";
import ErrorFallback from "../../ErrorFallback";

const Lists = () => {
  const lists = useSelector(({ lists }) => lists);

  const { fetchLists } = useList();

  const [error, setError] = useEffectErrorHandler(() => fetchLists());

  const renderLists = () => {
    if (!lists) return null;

    return Object.values(lists).map((list) => {
      const { title } = list.listId;
      const { _id, wordsCount } = list;

      return (
        <Grid key={list.listId._id} item xs={12} sm={6} md={3}>
          <StyledListCard id={_id} title={title} wordsCount={wordsCount} />
        </Grid>
      );
    });
  };

  if (error) throw error;

  return renderLists();
};

const ListsMenu = () => {
  return (
    <Grid container spacing={2} style={{ marginTop: 1 }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Grid item xs={12} sm={6} md={3}>
          <StyledNewListCard />
        </Grid>
        <Lists />
      </ErrorBoundary>
    </Grid>
  );
};

export default ListsMenu;
