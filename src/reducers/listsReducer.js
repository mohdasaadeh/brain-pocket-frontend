import _ from "lodash";

import {
  FETCH_LISTS,
  FETCH_LIST,
  CREATE_LIST,
  DELETE_LIST,
  EDIT_LIST,
  DELETE_LISTS,
} from "../actions/types";

const listsReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return _.mapKeys(action.payload, "_id");
    case FETCH_LIST:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_LIST:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_LIST:
      return _.omit(state, action.payload);
    case EDIT_LIST:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_LISTS:
      return null;
    default:
      return state;
  }
};

export default listsReducer;
