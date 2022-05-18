import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import ListFormStateToRedux from "./ListFormStateToRedux";

const ListForm = ({ onSubmit, onCancel, initialValues }) => {
  const navigate = useNavigate();

  const renderField = ({ input, meta, placeholder }) => {
    return (
      <TextField
        {...input}
        label={placeholder}
        variant="standard"
        style={{ minWidth: 400 }}
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
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <Field
                  name="firstColumnTitle"
                  component={renderField}
                  placeholder="Card Front Title"
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <Field
                  name="secondColumnTitle"
                  component={renderField}
                  placeholder="Card Back Title"
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
