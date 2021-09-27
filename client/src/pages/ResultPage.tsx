import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { IReducer } from "../redux";
import {
  ResultInterface,
  ShareInterface,
} from "../redux/interfaces/dataInterface";
import { resetProgress } from "../redux/progress";
import { getIdCookie, getIpCookie } from "../utils/utils.identification";
import { RiInstagramLine, RiKakaoTalkFill } from "react-icons/ri";
import { FiLink } from "react-icons/fi";
import "./ResultPage.scss";

interface Props {}
const ResultPage: React.FC<Props> = (props) => {
  const { mbti } = useParams<{ mbti: string }>();
  const progress = useSelector((state: IReducer) => state.progress);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
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
  }, []);

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
      <div className="animation-fade-in" />
      <div className="result-container">
        <span className="title">당신의 MBTI</span>
        <span className="context">{mbti}</span>
        <span className="description">당신은 어쩌구 저쩌구 이러쿵 저러쿵</span>
      </div>
      <button
        className="large-button"
        onClick={() => {
          resetProgress()(dispatch);
          history.push("/start");
        }}
      >
        처음으로
      </button>
      <div className="bottom-buttons">
        <button className="small-button" onClick={() => onShare("link")}>
          <FiLink />
        </button>
        <button className="small-button" onClick={() => onShare("kakao")}>
          <RiKakaoTalkFill className="share-svg" />
        </button>
        <button className="small-button" onClick={() => onShare("instagram")}>
          <RiInstagramLine className="share-svg" />
        </button>
      </div>
    </>
  );
};

export default ResultPage;
