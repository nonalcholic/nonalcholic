import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ShareInterface } from "../redux/interfaces/dataInterface";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FiLink } from "react-icons/fi";
import "./ResultPage.scss";
import { MBTIResult } from "../utils/utils.const";
import { IP_ADDRESS, SERVER_PORT } from "../utils/utils.env";
import { MBTIResultType } from "../redux/interfaces/progressInterface";
import { IReducer } from "../redux";
import HomeButton from "../components/HomeButton";

declare const window: any;

interface Props {}
const ResultPage: React.FC<Props> = (props) => {
  const { mbti } = useParams<{ mbti: string }>();
  const MBTI: MBTIResultType = mbti.toUpperCase() as MBTIResultType;

  const hiddenRef = useRef<HTMLTextAreaElement>(null);
  const progress = useSelector((state: IReducer) => state.progress);
  const [showCopyMessage, setShowCopyMeesage] = useState<boolean>(false);

  const kakaoInit = async () => {
    window.Kakao.init("7281c5f7129e05440500f936dedee302");

    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: "KAIST 안 내 최애 장소",
        description: "내 최애 장소는 어디일까요?!",
        imageUrl: "logo192.png",
        link: {
          mobileWebUrl: `http://${IP_ADDRESS}`,
          webUrl: `http://${IP_ADDRESS}`,
        },
      },
      buttons: [
        {
          title: "결과보기",
          link: {
            mobileWebUrl: `http://${IP_ADDRESS}/${MBTI}`,
            webUrl: `http://${IP_ADDRESS}/${MBTI}`,
          },
        },
        {
          title: "테스트하기",
          link: {
            mobileWebUrl: `http://${IP_ADDRESS}/start`,
            webUrl: `http://${IP_ADDRESS}/start`,
          },
        },
      ],
    });
  };

  useEffect(() => {
    kakaoInit();
  }, []);

  const onShare = (where: "link" | "kakao") => {
    const body: ShareInterface = {
      id: progress.id,
      type: where,
    };

    try {
      fetch(`http://${IP_ADDRESS}:${SERVER_PORT}/share`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    } catch (e) {
      console.log(e);
    }

    switch (where) {
      case "link":
        if (hiddenRef.current) {
          hiddenRef.current.style.display = "block";
          hiddenRef.current.select();
          document.execCommand("Copy");
          hiddenRef.current.style.display = "none";

          setShowCopyMeesage(true);
        }
        break;
      case "kakao":
        break;
    }
  };

  return (
    <>
      <img
        className="background-picture"
        id="background-picture"
        src={require(`../assets/mbti/${MBTI}.jpg`).default}
        alt="background"
      />
      <div className="animation-fade-in" />
      <div className="block" />
      <div className="result-container" id="result-container">
        <span className="hint-title">{"나의 KAIST 최애 장소는.."}</span>
        <span className="result-title one">{MBTIResult[MBTI].title}</span>
        <span className="result-title two">{MBTIResult[MBTI].place}</span>
        <img
          className="result-picture"
          src={require(`../assets/mbti/${MBTI}.jpg`).default}
          alt="result"
        />
        <span className="result-context">{MBTIResult[MBTI].subtitle}</span>
        <span className="result-description">
          {MBTIResult[MBTI].description}
        </span>
        <span id="hidden-url" className="hidden-url">
          kaist-mbti.me
        </span>
        <div className="result-buttons" id="result-buttons">
          <textarea
            readOnly
            style={{ display: "none" }}
            value={`http://${IP_ADDRESS}/${MBTI}`}
            tabIndex={-1}
            ref={hiddenRef}
          />
          <div className="bottom-buttons">
            <button className="small-button" onClick={() => onShare("link")}>
              <FiLink style={{ color: "black" }} />
            </button>
            <button
              className="small-button"
              id="kakao-link-btn"
              onClick={() => onShare("kakao")}
            >
              <RiKakaoTalkFill className="share-svg" fill={"black"} />
            </button>
          </div>
          {showCopyMessage && (
            <div
              className="copy-message"
              onClick={() => setShowCopyMeesage(false)}
            >
              링크가 클립보드에 복사되었습니다
            </div>
          )}
        </div>
      </div>
      <HomeButton showDeveloper showStatistics />
    </>
  );
};

export default ResultPage;
