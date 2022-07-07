import { WORD_FORM } from "./types";

export const updateFormState = (form, state) => ({
  type: WORD_FORM,
  form,
  payload: state
});
