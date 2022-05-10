import axios from "axios";
import { useDispatch } from "react-redux";

import { createList } from "../actions";

export const useCreateList = async (formValues) => {
  const dispatch = useDispatch();

  const res = await axios.post("/api/lists/new", formValues);

  dispatch(createList(res.data));

  return res.data;
};
