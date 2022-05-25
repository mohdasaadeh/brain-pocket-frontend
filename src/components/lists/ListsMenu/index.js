import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

import { useList } from "../../../hooks/useList";
import StyledListCard from "./ListCard.styles";
import StyledNewListCard from "./NewListCard.styles";

const Lists = () => {
  const lists = useSelector(({ lists }) => lists);

  const { fetchLists } = useList();

  useEffect(() => {
    fetchLists();
  }, []);

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

  return (
    <Grid container spacing={2} style={{ marginTop: 1 }}>
      <Grid item xs={12} sm={6} md={3}>
        <StyledNewListCard />
      </Grid>
      {renderLists()}
    </Grid>
  );
};

export default Lists;
