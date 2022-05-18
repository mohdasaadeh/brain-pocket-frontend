import axios from "axios";
import { useDispatch } from "react-redux";

import { FETCH_USER } from "../actions/types";

const useAuth = () => {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    const { data } = await axios.get("/api/user/current_user");

    dispatch({ type: FETCH_USER, payload: data });
  };

  return {
    fetchUser,
  };
};

export default useAuth;
