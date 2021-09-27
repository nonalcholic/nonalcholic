import React, { useEffect, useRef } from "react";
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

declare const window: any;

interface Props {}
const ResultPage: React.FC<Props> = (props) => {
  const { mbti } = useParams<{ mbti: string }>();
  const progress = useSelector((state: IReducer) => state.progress);
  const history = useHistory();
  const dispatch = useDispatch();
  const hiddenRef = useRef<HTMLTextAreaElement>(null);

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

    window.Kakao.init("7281c5f7129e05440500f936dedee302");
    console.log(window.Kakao.isInitialized());
    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: "KAIST 안 내 최애 장소",
        description: "내 최에 장소는 어디일까요?!",
        imageUrl: "logo192.png",
        link: {
          mobileWebUrl: "https://localhost:3000",
          webUrl: "https://localhost:3000",
        },
      },
      // social: {
      //   likeCount: 286,
      //   commentCount: 45,
      //   sharedCount: 845,
      // },
      buttons: [
        {
          title: "결과보기",
          link: {
            mobileWebUrl: `https://localhost:3000/${mbti}`,
            webUrl: `https://localhost:3000/${mbti}`,
          },
        },
        {
          title: "테스트하기",
          link: {
            mobileWebUrl: "https://localhost:3000/start",
            webUrl: "https://localhost:3000/start",
          },
        },
      ],
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

    switch (where) {
      case "link":
        if (hiddenRef.current) {
          hiddenRef.current.style.display = "block";
          hiddenRef.current.select();
          document.execCommand("Copy");
          hiddenRef.current.style.display = "none";
        }
        break;
      case "instagram":
        break;
      case "kakao":
        break;
      // 7281c5f7129e05440500f936dedee302/
    }
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
      <textarea
        readOnly
        style={{ display: "none" }}
        value={`http://localhost:3000/${mbti}`}
        tabIndex={-1}
        ref={hiddenRef}
      />
      <div className="bottom-buttons">
        <button className="small-button" onClick={() => onShare("link")}>
          <FiLink />
        </button>
        <a
          className="small-button"
          id="kakao-link-btn"
          href="javascript:;"
          onClick={() => onShare("kakao")}
        >
          <RiKakaoTalkFill className="share-svg" fill={"black"} />
        </a>
        <button className="small-button" onClick={() => onShare("instagram")}>
          <RiInstagramLine className="share-svg" />
        </button>
      </div>
    </>
  );
};

export default ResultPage;
