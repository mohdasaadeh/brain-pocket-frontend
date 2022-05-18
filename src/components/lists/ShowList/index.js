import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useList } from "../../../hooks/useList";
import StyledWordsTable from "./WordsTable.styles";

const ShowList = () => {
  const { id } = useParams();

  const list = useSelector(({ lists }) => {
    if (!lists) return lists;

    return Object.values(lists).find((list) => {
      return list._id === id;
    });
  });

  const { fetchList } = useList();

  useEffect(() => {
    fetchList(id);
  }, []);

  const renderList = () => {
    if (!list) return null;

    return (
      <div>
        <StyledWordsTable list={list} />
      </div>
    );
  };

  return renderList();
};

export default ShowList;
