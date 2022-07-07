import { Form, Field } from "react-final-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import WordFormStateToRedux from "./WordFormStateToRedux";

const WordForm = ({ onSubmit, onCancel, initialValues }) => {
  const required = value => (value ? undefined : "Required");

  const composeValidators =
    (...validators) =>
    value =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );

  const renderField = ({ input, meta, placeholder }) => {
    return (
      <TextField
        {...input}
        label={placeholder}
        variant="standard"
        style={{ minWidth: 500 }}
        error={meta.error && meta.touched ? true : false}
        helperText={meta.error && meta.touched && meta.error}
      />
    );
  };

  const renderThirdField = ({ input, meta, placeholder }) => {
    return (
      <TextField
        {...input}
        label={placeholder}
        variant="standard"
        style={{ minWidth: 500 }}
        multiline
        rows={4}
        error={meta.error && meta.touched ? true : false}
        helperText={meta.error && meta.touched && meta.error}
      />
    );
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      subscription={{ submitting: true, pristine: true }}
    >
      {({ handleSubmit, form }) => (
        <Grid container spacing={2} align="center">
          <Grid item xs={12}>
            <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
              <WordFormStateToRedux form="wordForm" />
              <div>
                <Field
                  name="firstColumnWord"
                  component={renderField}
                  placeholder="Card Front Word"
                  validate={composeValidators(required)}
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <Field
                  name="secondColumnWord"
                  component={renderField}
                  placeholder="Card Back Word"
                  validate={composeValidators(required)}
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <Field
                  name="thirdColumnWord"
                  component={renderThirdField}
                  placeholder="Card Extra Word"
                  validate={composeValidators(required)}
                />
              </div>
              <div className="buttons" style={{ marginTop: 10 }}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  onClick={onCancel}
                  style={{ marginLeft: 5 }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      )}
    </Form>
  );
};

export default WordForm;
