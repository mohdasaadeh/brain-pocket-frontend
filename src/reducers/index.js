import { combineReducers } from "redux";

import authReducer from "./authReducer";
import listsReducer from "./listsReducer";
import listFormReducer from "./listFormReducer";
import originalWordsReducer from "./originalWordsReducer";

const reducers = combineReducers({
  auth: authReducer,
  lists: listsReducer,
  listForm: listFormReducer,
  originalWords: originalWordsReducer,
});

export default reducers;
