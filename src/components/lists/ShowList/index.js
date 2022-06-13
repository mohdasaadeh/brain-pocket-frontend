import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { useList } from "../../../hooks/useList";
import { useWord } from "../../../hooks/useWord";
import StyledWordsTable from "./WordsTable.styles";
import ErrorFallback from "../../ErrorFallback";
import useEffectErrorHandler from "../../../hooks/useEffectErrorHandler";

const ListTable = ({ lists, originalWords }) => {
  const { id } = useParams();

  const { fetchList } = useList();
  const { fetchOriginalWords, deleteOriginalWords } = useWord();

  const [error] = useEffectErrorHandler(useCallback(async () => {
    await fetchList(id);
    await fetchOriginalWords(id);
  }, [fetchList, fetchOriginalWords, id]));

  useEffect(() => {
    return () => {
      deleteOriginalWords();
    };
  }, [deleteOriginalWords]);

  const renderListTable = () => {
    if (!lists || !originalWords) return null;

    const list = Object.values(lists).find((list) => {
      return list._id === id;
    });
    const originalWordsArray = Object.values(originalWords);

    return <StyledWordsTable list={list} originalWords={originalWordsArray} />;
  };

  if (error) throw error;

  return renderListTable();
};

const ShowList = (props) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ListTable {...props} />
    </ErrorBoundary>
  );
};

const mapStatetoProps = (state) => {
  return {
    lists: state.lists,
    originalWords: state.originalWords,
  };
};

export default connect(mapStatetoProps)(ShowList);
