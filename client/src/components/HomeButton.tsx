import "./HomeButton.scss";
import React, { useEffect, useState } from "react";
import { resetProgress } from "../redux/progress";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

interface Props {}
const HomeButton: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <div
        className="home-button bottom-fixed"
        style={{
          marginTop: "auto",
        }}
        onClick={() => {
          resetProgress()(dispatch);
          history.push(".");
        }}
      >
        메인으로
      </div>
    </>
  );
};

export default HomeButton;
