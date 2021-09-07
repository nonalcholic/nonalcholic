import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  ResultInterface,
  ShareInterface,
} from "../redux/interfaces/dataInterface";
import { getIdCookie, getIpCookie } from "../utils/utils.identification";

interface Props {}
const StartPage: React.FC<Props> = (props) => {
  const history = useHistory();

  const onResult = () => {
    const body: ResultInterface = {
      id: getIdCookie(),
      answers: [1, 0, -1],
      result: "ENFJ",
      ip: getIpCookie(),
    };

    fetch("http://localhost:9999/result", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  const onShare = () => {
    const body: ShareInterface = {
      id: getIdCookie(),
      type: "kakao",
    };

    fetch("http://localhost:9999/share", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };
  return (
    <>
      <button onClick={() => onResult()}>결과 보내기</button>
      <button onClick={() => onShare()}>공유하기</button>
      <button onClick={() => history.push("/progress")}>시작하기</button>
    </>
  );
};

export default StartPage;
