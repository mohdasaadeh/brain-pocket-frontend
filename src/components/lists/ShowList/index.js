import React, { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { useList } from "../../../hooks/useList";
import { useWord } from "../../../hooks/useWord";
import StyledWordsTable from "./WordsTable.styles";
import ErrorFallback from "../../ErrorFallback";
import useEffectErrorHandler from "../../../hooks/useEffectErrorHandler";

const ListTable = () => {
  const { id } = useParams();

  const { fetchList } = useList();
  const { fetchOriginalWords, deleteOriginalWords } = useWord();

  const list = useSelector(({ lists }) => {
    if (!lists) return null;

    return Object.values(lists).find(list => {
      return list._id === id;
    });
  });
  const originalWords = useSelector(
    ({ originalWords }) => {
      if (!originalWords) return null;

      return Object.values(originalWords);
    },
    (prev, next) => JSON.stringify(prev) === JSON.stringify(next)
  );

  const [error] = useEffectErrorHandler(
    useCallback(async () => {
      await fetchList(id);
      await fetchOriginalWords(id);
    }, [fetchList, fetchOriginalWords, id])
  );

  useEffect(() => {
    return () => {
      deleteOriginalWords();
    };
  }, [deleteOriginalWords]);

  const renderListTable = () => {
    if (!list || !originalWords) return null;

    return <StyledWordsTable list={list} originalWords={originalWords} />;
  };

  if (error) throw error;

  return renderListTable();
};

const ShowList = props => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ListTable {...props} />
    </ErrorBoundary>
  );
};

export default ShowList;
