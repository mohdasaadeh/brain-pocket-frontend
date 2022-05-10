import axios from "axios";

import {
  FETCH_USER,
  FETCH_LISTS,
  FETCH_LIST,
  CREATE_LIST,
  DELETE_LIST,
  EDIT_LIST,
} from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/user/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchLists = () => async (dispatch) => {
  const res = await axios.get("/api/lists");

  dispatch({ type: FETCH_LISTS, payload: res.data });
};

export const fetchList = (id) => async (dispatch) => {
  const res = await axios.get(`/api/lists/${id}`);

  dispatch({ type: FETCH_LIST, payload: res.data });
};

export const createList = (formValues) => async (dispatch) => {
  const res = await axios.post("/api/lists/new", formValues);

  dispatch({ type: CREATE_LIST, payload: res.data });
};

export const deleteList = (id) => async (dispatch) => {
  const res = await axios.delete(`/api/lists/${id}/delete`);

  dispatch({ type: DELETE_LIST, payload: res.data });
};

export const editList = (formValues, id) => async (dispatch) => {
  const res = await axios.put(`/api/lists/${id}/edit`, formValues);

  dispatch({ type: CREATE_LIST, payload: res.data });
};
