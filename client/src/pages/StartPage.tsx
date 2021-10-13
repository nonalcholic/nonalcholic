import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

interface Props {}

const StartPage: React.FC<Props> = (props) => {
  const history = useHistory();

  return (
    <>
      <span className="context" style={{ height: 400 }}>
        카이스트 MBTI
      </span>
      <span className="description" style={{ marginBottom: 48 }}>
        {"유사 과학일수도 아닐수도.\n재미있으면 됐지."}
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
        {"본 검사는 KAIST의 공식 페이지가 아닌, 졸업생이 제작한 페이지입니다."}
      </span>
    </>
  );
};

export default StartPage;
