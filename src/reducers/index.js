import { combineReducers } from "redux";

import authReducer from "./authReducer";
import listsReducer from "./listsReducer";
import listFormReducer from "./listFormReducer";
import originalWordsReducer from "./originalWordsReducer";
import wordFormReducer from "./wordFormReducer";

const reducers = combineReducers({
  auth: authReducer,
  lists: listsReducer,
  listForm: listFormReducer,
  originalWords: originalWordsReducer,
  wordForm: wordFormReducer
});

export default reducers;
