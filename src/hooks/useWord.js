import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { FETCH_ORIGINAL_WORDS, DELETE_ORIGINAL_WORDS } from "../actions/types";
import useErrorHandler from "./useErrorHandler";

export const useWord = () => {
  const dispatch = useDispatch();

  const fetchOriginalWords = useErrorHandler(useCallback(async (id) => {
    const { data } = await axios.get(`/api/lists/${id}/original_words`);

    dispatch({ type: FETCH_ORIGINAL_WORDS, payload: data });
  }, [dispatch]));

  const deleteOriginalWords = useErrorHandler(useCallback(() => {
    dispatch({ type: DELETE_ORIGINAL_WORDS });
  }, [dispatch]));

  return { fetchOriginalWords, deleteOriginalWords };
};
