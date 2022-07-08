import _ from "lodash";

import {
  FETCH_ORIGINAL_WORD,
  FETCH_ORIGINAL_WORDS,
  CREATE_ORIGINAL_WORD,
  EDIT_ORIGINAL_WORD,
  DELETE_ORIGINAL_WORDS,
  DELETE_ORIGINAL_WORD
} from "../actions/types";

const originalWordsReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_ORIGINAL_WORD:
      return { ...state, [action.payload._id]: action.payload };
    case FETCH_ORIGINAL_WORDS:
      return _.mapKeys(action.payload, "_id");
    case CREATE_ORIGINAL_WORD:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_ORIGINAL_WORD:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_ORIGINAL_WORDS:
      return null;
    case DELETE_ORIGINAL_WORD:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default originalWordsReducer;
