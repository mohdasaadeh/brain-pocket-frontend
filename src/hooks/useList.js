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

export const useList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchLists = async () => {
    const { data } = await axios.get("/api/lists");

    dispatch({ type: FETCH_LISTS, payload: data });
  };

  const fetchList = async (id) => {
    const { data } = await axios.get(`/api/lists/${id}`);

    dispatch({ type: FETCH_LIST, payload: data });
  };

  const createList = async (formValues) => {
    try {
      const { data } = await axios.post("/api/lists/neww", formValues);

      dispatch({ type: CREATE_LIST, payload: data });

      navigate(`/lists/${data._id}`);
    } catch (error) {
      return error;
    }
  };

  const deleteList = async (id) => {
    const { data } = await axios.delete(`/api/lists/${id}/delete`);

    dispatch({ type: DELETE_LIST, payload: data });

    navigate("/lists");
  };

  const editList = async (formValues, id) => {
    const { data } = await axios.put(`/api/lists/${id}/edit`, formValues);

    dispatch({ type: EDIT_LIST, payload: data });

    navigate(`/lists/${data._id}`);
  };

  return {
    fetchList,
    fetchLists,
    createList,
    deleteList,
    editList,
  };
};
