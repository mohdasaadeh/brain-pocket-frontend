import { combineReducers } from "redux";

import authReducer from "./authReducer";
import listsReducer from "./listsReducer";
import listFormReducer from "./listFormReducer";

const reducers = combineReducers({
  auth: authReducer,
  lists: listsReducer,
  listForm: listFormReducer,
});

export default reducers;
