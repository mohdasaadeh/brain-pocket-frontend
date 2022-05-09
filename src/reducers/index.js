import { combineReducers } from "redux";

import authReducer from "./authReducer";
import listsReducer from "./listsReducer";

const reducers = combineReducers({ auth: authReducer, lists: listsReducer });

export default reducers;
