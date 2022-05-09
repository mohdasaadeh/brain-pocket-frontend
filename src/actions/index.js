import axios from "axios";

import { FETCH_USER, FETCH_LISTS } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/user/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchLists = () => async (dispatch) => {
  const res = await axios.get("/api/lists");

  dispatch({ type: FETCH_LISTS, payload: res.data });
};
