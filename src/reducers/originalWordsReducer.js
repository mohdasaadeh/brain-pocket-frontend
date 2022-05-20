import _ from "lodash";

import { FETCH_ORIGINAL_WORDS, DELETE_ORIGINAL_WORDS } from "../actions/types";

const originalWordsReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_ORIGINAL_WORDS:
      return _.mapKeys(action.payload, "_id");
    case DELETE_ORIGINAL_WORDS:
      return null;
    default:
      return state;
  }
};

export default originalWordsReducer;
