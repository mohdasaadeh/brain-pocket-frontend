import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { useList } from "../../../hooks/useList";
import { useWord } from "../../../hooks/useWord";
import StyledWordsTable from "./WordsTable.styles";

const ShowList = ({ lists, originalWords }) => {
  const { id } = useParams();

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
    if (!lists || !originalWords) return null;

    const list = Object.values(lists).find((list) => {
      return list._id === id;
    });
    const originalWordsArray = Object.values(originalWords);

    return (
      <div>
        <StyledWordsTable list={list} originalWords={originalWordsArray} />
      </div>
    );
  };

  return renderList();
};

const mapStatetoProps = (state) => {
  return {
    lists: state.lists,
    originalWords: state.originalWords,
  };
};

export default connect(mapStatetoProps)(ShowList);
