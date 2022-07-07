import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  FETCH_ORIGINAL_WORDS,
  CREATE_ORIGINAL_WORD,
  DELETE_ORIGINAL_WORDS,
  DELETE_ORIGINAL_WORD
} from "../actions/types";
import useErrorHandler from "./useErrorHandler";
import useSafeDispatch from "./useSafeDispatch";

export const useWord = () => {
  const dispatch = useDispatch();
  const safeDispatch = useSafeDispatch(dispatch);

  const navigate = useNavigate();

  const fetchOriginalWords = useErrorHandler(
    useCallback(
      async id => {
        const { data } = await axios.get(`/api/lists/${id}/original_words`);

        safeDispatch({ type: FETCH_ORIGINAL_WORDS, payload: data });
      },
      [safeDispatch]
    )
  );

  const createOriginalWord = useErrorHandler(
    useCallback(
      async (listRelationId, formValues) => {
        const { data } = await axios.post(
          `/api/lists/${listRelationId}/original_words/new`,
          formValues
        );

        safeDispatch({ type: CREATE_ORIGINAL_WORD, payload: data });

        navigate(`/lists/${listRelationId}`);
      },
      [safeDispatch, navigate]
    )
  );

  const deleteOriginalWords = useErrorHandler(
    useCallback(() => {
      dispatch({ type: DELETE_ORIGINAL_WORDS });
    }, [dispatch])
  );

  const deleteOriginalWord = useErrorHandler(
    useCallback(
      async (listRelationId, id) => {
        const { data } = await axios.delete(
          `/api/lists/${listRelationId}/original_words/${id}/delete`,
          id
        );

        safeDispatch({ type: DELETE_ORIGINAL_WORD, payload: data });
      },
      [safeDispatch]
    )
  );

  return {
    fetchOriginalWords,
    createOriginalWord,
    deleteOriginalWords,
    deleteOriginalWord
  };
};
