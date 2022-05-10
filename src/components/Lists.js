import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

import { fetchLists } from "../actions/index";
import ListCard from "./ListCard";
import NewListCard from "./NewListCard";

const Lists = () => {
  const lists = useSelector(({ lists }) => lists);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLists());
  }, []);

  const renderLists = () => {
    if (!lists) return null;

    return Object.values(lists).map((list) => {
      const { title } = list.listId;
      const { _id, wordsCount } = list;

      return (
        <ListCard
          key={list.listId._id}
          id={_id}
          title={title}
          wordsCount={wordsCount}
        />
      );
    });
  };

  return (
    <Grid container spacing={2} style={{ marginTop: 1 }}>
      <NewListCard />
      {renderLists()}
    </Grid>
  );
};

export default Lists;
