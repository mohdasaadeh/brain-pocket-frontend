import { LIST_FORM } from "./types";

export const updateFormState = (form, state) => ({
  type: LIST_FORM,
  form,
  payload: state,
});
