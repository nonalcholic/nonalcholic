import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

interface Props {}
const StartPage: React.FC<Props> = (props) => {
  const history = useHistory();

  return (
    <>
      <button
        onClick={() => {
          fetch("/").then((res) => {
            console.log("hello server");
            console.log(res);
          });
        }}
      >
        요청 보내기
      </button>
      <button onClick={() => history.push("/progress")}>시작하기</button>
    </>
  );
};

export default StartPage;
