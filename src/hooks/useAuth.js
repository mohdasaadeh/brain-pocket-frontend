import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { FETCH_USER } from "../actions/types";
import useErrorHandler from "./useErrorHandler";

const useAuth = () => {
  const dispatch = useDispatch();

  const fetchUser = useErrorHandler(useCallback(async () => {
    const { data } = await axios.get("/api/user/current_user");

    dispatch({ type: FETCH_USER, payload: data });
  }, [dispatch]));

  return {
    fetchUser,
  };
};

export default useAuth;
