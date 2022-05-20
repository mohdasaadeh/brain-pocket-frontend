import axios from "axios";
import { useDispatch } from "react-redux";

import { FETCH_ORIGINAL_WORDS, DELETE_ORIGINAL_WORDS } from "../actions/types";

export const useWord = () => {
  const dispatch = useDispatch();

  const fetchOriginalWords = async (id) => {
    const { data } = await axios.get(`/api/lists/${id}/original_words`);

    dispatch({ type: FETCH_ORIGINAL_WORDS, payload: data });
  };

  const deleteOriginalWords = () => {
    dispatch({ type: DELETE_ORIGINAL_WORDS });
  };

  return { fetchOriginalWords, deleteOriginalWords };
};
