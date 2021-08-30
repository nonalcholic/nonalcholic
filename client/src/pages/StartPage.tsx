import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

interface Props {}
const StartPage: React.FC<Props> = (props) => {
  const history = useHistory();

  const onClickFunction = async () => {
    const res = await fetch("http://localhost:9999/");
    console.log(res.body);
    const text = await res.text();
    console.log("text,", text);
  };
  return (
    <>
      <button onClick={() => onClickFunction()}>요청 보내기</button>
      <button onClick={() => history.push("/progress")}>시작하기</button>
    </>
  );
};

export default StartPage;
