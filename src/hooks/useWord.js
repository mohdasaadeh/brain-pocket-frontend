import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { FETCH_ORIGINAL_WORDS, DELETE_ORIGINAL_WORDS } from "../actions/types";
import useErrorHandler from "./useErrorHandler";
import useSafeDispatch from "./useSafeDispatch";

export const useWord = () => {
  const dispatch = useDispatch();
  const safeDispatch = useSafeDispatch(dispatch);

  const fetchOriginalWords = useErrorHandler(
    useCallback(
      async id => {
        const { data } = await axios.get(`/api/lists/${id}/original_words`);

        safeDispatch({ type: FETCH_ORIGINAL_WORDS, payload: data });
      },
      [safeDispatch]
    )
  );

  const deleteOriginalWords = useErrorHandler(
    useCallback(() => {
      safeDispatch({ type: DELETE_ORIGINAL_WORDS });
    }, [safeDispatch])
  );

  return { fetchOriginalWords, deleteOriginalWords };
};
