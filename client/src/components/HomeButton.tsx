import "./HomeButton.scss";
import React, { useEffect, useState } from "react";
import { resetProgress } from "../redux/progress";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

interface Props {
  showDeveloper?: boolean;
}
const HomeButton: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <div className="bottom-fixed">
        {props.showDeveloper && (
          <button
            className="hint-button"
            style={{ marginBottom: 12 }}
            onClick={() => history.push("/developer")}
          >
            개발자
          </button>
        )}
        <div
          className="home-button "
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
      </div>
    </>
  );
};

export default HomeButton;
