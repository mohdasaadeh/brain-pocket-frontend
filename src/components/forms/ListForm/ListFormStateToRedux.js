import React from "react";
import { connect } from "react-redux";
import { FormSpy } from "react-final-form";

import { updateFormState } from "../../../actions/listForm";

const FormStateToRedux = ({ form, updateFormState }) => (
  <FormSpy onChange={(state) => updateFormState(form, state)} />
);

export default connect(undefined, { updateFormState })(FormStateToRedux);
