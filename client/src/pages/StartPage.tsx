import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

interface Props {}

const StartPage: React.FC<Props> = (props) => {
  const history = useHistory();

  return (
    <>
      <span className="title" style={{ height: 200 }}>
        카이스트 MBTI
      </span>
      <button
        className="large-button"
        onClick={() => history.push("/progress")}
        style={{ marginBottom: 12 }}
      >
        시작하기
      </button>
      <button
        className="large-button"
        onClick={() => history.push("/statistics")}
        style={{ marginBottom: 12 }}
      >
        통계
      </button>
      <button
        className="large-button"
        onClick={() => history.push("/developer")}
      >
        개발자
      </button>
      <span className="hint" style={{ marginTop: "auto" }}>
        {"이 사이트는 KAIST의 공식 페이지가 아닌\n졸업생이 제작한 페이지입니다"}
      </span>
    </>
  );
};

export default StartPage;
