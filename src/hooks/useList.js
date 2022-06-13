import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  FETCH_LISTS,
  FETCH_LIST,
  CREATE_LIST,
  DELETE_LIST,
  EDIT_LIST,
  DELETE_LISTS,
} from "../actions/types";
import useErrorHandler from "./useErrorHandler";

export const useList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchLists = useErrorHandler(useCallback(async () => {
    const { data } = await axios.get("/api/lists");

    dispatch({ type: FETCH_LISTS, payload: data });
  }, [dispatch]));

  const fetchList = useErrorHandler(useCallback(async (id) => {
    const { data } = await axios.get(`/api/lists/${id}`);

    dispatch({ type: FETCH_LIST, payload: data });
  }, [dispatch]));

  const createList = useErrorHandler(useCallback(async (formValues) => {
    const { data } = await axios.post("/api/lists/new", formValues);

    dispatch({ type: CREATE_LIST, payload: data });

    navigate(`/lists/${data._id}`);
  }, [dispatch, navigate]));

  const deleteList = useErrorHandler(useCallback(async (id) => {
    const { data } = await axios.delete(`/api/lists/${id}/delete`);

    dispatch({ type: DELETE_LIST, payload: data });

    navigate("/lists");
  }, [dispatch, navigate]));

  const editList = useErrorHandler(useCallback(async (formValues, id) => {
    const { data } = await axios.put(`/api/lists/${id}/edit`, formValues);

    dispatch({ type: EDIT_LIST, payload: data });

    navigate(`/lists/${data._id}`);
  }, [dispatch, navigate]));

  const deleteLists = useErrorHandler(useCallback(async () => {
    dispatch({ type: DELETE_LISTS });
  }, [dispatch]));

  return {
    fetchList,
    fetchLists,
    createList,
    deleteList,
    editList,
    deleteLists,
  };
};
