import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

interface Props {}
const StartPage: React.FC<Props> = (props) => {
  const history = useHistory();

  const onClickFunction = async () => {
    const body = {
      message: "hi",
    };

    const res = await fetch("http://localhost:9999/test/message", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    // const res = await fetch("http://localhost:9999/");
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
