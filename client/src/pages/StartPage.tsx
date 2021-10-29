import "./StartPage.scss";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

interface Props {}

const StartPage: React.FC<Props> = (props) => {
  const history = useHistory();

  return (
    <>
      <div className="main-image-container">
        <span className="title with-image">
          {"나에게 딱 맞는\n카이스트 장소는 어디?"}
        </span>
        <img
          className="main-image"
          src={require("../assets/main.png").default}
        />
      </div>
      <div className="buttons-container">
        <button
          className="large-button"
          onClick={() => history.push("/progress")}
        >
          시작하기
        </button>
        <button
          className="large-button"
          onClick={() => history.push("/statistics")}
        >
          통계
        </button>
        <button
          className="large-button"
          onClick={() => history.push("/developer")}
        >
          개발자
        </button>
      </div>
      <span className="hint" style={{ marginTop: 36 }}>
        {"이 사이트는 KAIST의 공식 페이지가 아닌\n졸업생이 제작한 페이지입니다"}
      </span>
    </>
  );
};

export default StartPage;
