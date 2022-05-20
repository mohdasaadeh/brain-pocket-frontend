import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useList } from "../../../hooks/useList";
import { useWord } from "../../../hooks/useWord";
import StyledWordsTable from "./WordsTable.styles";

const ShowList = () => {
  const { id } = useParams();

  const list = useSelector(({ lists }) => {
    if (!lists) return lists;

    return Object.values(lists).find((list) => {
      return list._id === id;
    });
  });

  const originalWords = useSelector(({ originalWords }) => {
    if (!originalWords) return null;

    return Object.values(originalWords);
  });

  const { fetchList } = useList();
  const { fetchOriginalWords, deleteOriginalWords } = useWord();

  useEffect(() => {
    fetchList(id);
    fetchOriginalWords(id);

    return () => {
      deleteOriginalWords();
    };
  }, []);

  const renderList = () => {
    if (!list || !originalWords) return null;

    return (
      <div>
        <StyledWordsTable list={list} originalWords={originalWords} />
      </div>
    );
  };

  return renderList();
};

export default ShowList;
