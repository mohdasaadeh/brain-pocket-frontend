import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchList } from "../actions";
import StyledShowList from "./ShowList.styles";

const ShowList = () => {
  const { id } = useParams();

  const list = useSelector(({ lists }) => {
    if (!lists) return lists;

    return Object.values(lists).find((list) => {
      return list._id === id;
    });
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList(id));
  }, []);

  const renderList = () => {
    if (!list) return null;

    return (
      <div>
        <StyledShowList list={list} />
      </div>
    );
  };

  return renderList();
};

export default ShowList;
