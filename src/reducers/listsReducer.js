import { FETCH_LISTS } from "../actions/types";

const listsReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return action.payload;
    default:
      return state;
  }
};

export default listsReducer;
