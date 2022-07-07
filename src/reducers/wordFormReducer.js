import { WORD_FORM } from "../actions/types";

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case WORD_FORM:
      return {
        ...state,
        [action.form]: action.payload
      };
    default:
      return state;
  }
}
