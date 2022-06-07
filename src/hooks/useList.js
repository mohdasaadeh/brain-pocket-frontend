import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  FETCH_LISTS,
  FETCH_LIST,
  CREATE_LIST,
  DELETE_LIST,
  EDIT_LIST,
} from "../actions/types";
import errorHandler from "../utils/errorHandler";

export const useList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchLists = errorHandler(async () => {
    const { data } = await axios.get("/api/lists");

    dispatch({ type: FETCH_LISTS, payload: data });
  });

  const fetchList = errorHandler(async (id) => {
    const { data } = await axios.get(`/api/lists/${id}`);

    dispatch({ type: FETCH_LIST, payload: data });
  });

  const createList = errorHandler(async (formValues) => {
    const { data } = await axios.post("/api/lists/new", formValues);

    dispatch({ type: CREATE_LIST, payload: data });

    navigate(`/lists/${data._id}`);
  });

  const deleteList = errorHandler(async (id) => {
    const { data } = await axios.delete(`/api/lists/${id}/delete`);

    dispatch({ type: DELETE_LIST, payload: data });

    navigate("/lists");
  });

  const editList = errorHandler(async (formValues, id) => {
    const { data } = await axios.put(`/api/lists/${id}/edit`, formValues);

    dispatch({ type: EDIT_LIST, payload: data });

    navigate(`/lists/${data._id}`);
  });

  return {
    fetchList,
    fetchLists,
    createList,
    deleteList,
    editList,
  };
};
