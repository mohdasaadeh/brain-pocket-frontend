import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Modal from "./Modal";
import { fetchList, deleteList } from "../actions";

const DeleteList = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const list = useSelector(({ lists }) => {
    if (!lists) return {};

    return Object.values(lists).find((list) => {
      return list._id === id;
    });
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList(id));
  }, []);

  const onDismiss = () => {
    navigate(`/lists/${id}`);
  };

  const onDelete = () => {
    dispatch(deleteList(id));

    navigate("/lists");
  };

  const renderActions = () => {
    return (
      <Typography align="center" style={{ marginTop: 10 }}>
        <Button variant="contained" color="primary" onClick={onDelete}>
          Delete
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate(`/lists/${id}`)}
          style={{ marginLeft: 5 }}
        >
          Cancel
        </Button>
      </Typography>
    );
  };

  const renderContent = () => {
    if (!list) return "Are you sure that you want to delete this list?";

    return `Are you sure that you want to delete "${list.listId.title}" list?`;
  };

  return (
    <Modal
      title="List Delete"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={onDismiss}
    />
  );
};

export default DeleteList;
