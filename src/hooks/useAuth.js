import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { FETCH_USER } from "../actions/types";
import useErrorHandler from "./useErrorHandler";
import useSafeDispatch from "./useSafeDispatch";

const useAuth = () => {
  const dispatch = useDispatch();
  const safeDispatch = useSafeDispatch(dispatch);

  const fetchUser = useErrorHandler(
    useCallback(async () => {
      const { data } = await axios.get("/api/user/current_user");

      safeDispatch({ type: FETCH_USER, payload: data });
    }, [safeDispatch])
  );

  return {
    fetchUser
  };
};

export default useAuth;
