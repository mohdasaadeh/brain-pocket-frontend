import { Form, Field } from "react-final-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import ListFormStateToRedux from "./ListFormStateToRedux";

const ListForm = ({ onSubmit, onCancel, initialValues }) => {
  const required = (value) => (value ? undefined : "Required");

  const minValue = (min) => (value) =>
    value.length >= min ? undefined : `Should be greater than ${min}`;

  const maxValue = (max) => (value) =>
    value.length <= max ? undefined : `Should be less than ${max}`;

  const composeValidators =
    (...validators) =>
    (value) =>
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
        style={{ minWidth: 400 }}
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
              <ListFormStateToRedux form="listForm" />
              <div>
                <Field
                  name="title"
                  component={renderField}
                  placeholder="List Title"
                  validate={composeValidators(
                    required,
                    minValue(3),
                    maxValue(30)
                  )}
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <Field
                  name="firstColumnTitle"
                  component={renderField}
                  placeholder="Card Front Title"
                  validate={composeValidators(
                    required,
                    minValue(3),
                    maxValue(30)
                  )}
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <Field
                  name="secondColumnTitle"
                  component={renderField}
                  placeholder="Card Back Title"
                  validate={composeValidators(
                    required,
                    minValue(3),
                    maxValue(30)
                  )}
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

export default ListForm;
