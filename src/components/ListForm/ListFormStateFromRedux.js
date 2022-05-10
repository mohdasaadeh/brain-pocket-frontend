import React from "react";
import { connect } from "react-redux";

const ListFormStateFromRedux = ({ listForm }) => (
  <pre>{JSON.stringify(listForm, 0, 2)}</pre>
);

const mapStateToProps = (state, ownProps) => ({
  listForm: (state && state.listForm && state.listForm[ownProps.form]) || {},
});

export default connect(mapStateToProps)(ListFormStateFromRedux);
