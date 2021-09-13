import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { IReducer } from "../redux";
import {
  ResultInterface,
  ShareInterface,
} from "../redux/interfaces/dataInterface";
import { resetProgress } from "../redux/progress";
import { getIdCookie, getIpCookie } from "../utils/utils.identification";

interface Props {}
const ResultPage: React.FC<Props> = (props) => {
  const { mbti } = useParams<{ mbti: string }>();
  const progress = useSelector((state: IReducer) => state.progress);
  const history = useHistory();
  const dispatch = useDispatch();

  const onResult = () => {
    const body: ResultInterface = {
      id: getIdCookie(),
      answers: progress.answerData.map((ans) => ans.score),
      result: mbti,
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

  const onShare = (where: "link" | "instagram" | "kakao") => {
    const body: ShareInterface = {
      id: getIdCookie(),
      type: where,
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
      <button onClick={() => onShare("link")}>링크 공유하기</button>
      <button onClick={() => onShare("kakao")}>카카오 공유하기</button>
      <button onClick={() => onShare("instagram")}>인스타 공유하기</button>
      <button
        onClick={() => {
          resetProgress()(dispatch);
          history.push("/start");
        }}
      >
        처음으로
      </button>
    </>
  );
};

export default ResultPage;
