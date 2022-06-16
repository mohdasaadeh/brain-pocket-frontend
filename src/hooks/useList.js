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
  DELETE_LISTS
} from "../actions/types";
import useErrorHandler from "./useErrorHandler";
import useSafeDispatch from "./useSafeDispatch";

export const useList = () => {
  const dispatch = useDispatch();
  const safeDispatch = useSafeDispatch(dispatch);

  const navigate = useNavigate();

  const fetchLists = useErrorHandler(
    useCallback(async () => {
      const { data } = await axios.get("/api/lists");

      safeDispatch({ type: FETCH_LISTS, payload: data });
    }, [safeDispatch])
  );

  const fetchList = useErrorHandler(
    useCallback(
      async id => {
        const { data } = await axios.get(`/api/lists/${id}`);

        safeDispatch({ type: FETCH_LIST, payload: data });
      },
      [safeDispatch]
    )
  );

  const createList = useErrorHandler(
    useCallback(
      async formValues => {
        const { data } = await axios.post("/api/lists/new", formValues);

        safeDispatch({ type: CREATE_LIST, payload: data });

        navigate(`/lists/${data._id}`);
      },
      [safeDispatch, navigate]
    )
  );

  const deleteList = useErrorHandler(
    useCallback(
      async id => {
        const { data } = await axios.delete(`/api/lists/${id}/delete`);

        safeDispatch({ type: DELETE_LIST, payload: data });

        navigate("/lists");
      },
      [safeDispatch, navigate]
    )
  );

  const editList = useErrorHandler(
    useCallback(
      async (formValues, id) => {
        const { data } = await axios.put(`/api/lists/${id}/edit`, formValues);

        safeDispatch({ type: EDIT_LIST, payload: data });

        navigate(`/lists/${data._id}`);
      },
      [safeDispatch, navigate]
    )
  );

  const deleteLists = useErrorHandler(
    useCallback(async () => {
      safeDispatch({ type: DELETE_LISTS });
    }, [safeDispatch])
  );

  return {
    fetchList,
    fetchLists,
    createList,
    deleteList,
    editList,
    deleteLists
  };
};
