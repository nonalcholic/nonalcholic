import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ShareInterface } from "../redux/interfaces/dataInterface";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FiImage, FiLink } from "react-icons/fi";
import "./ResultPage.scss";
import { MBTIResult } from "../utils/utils.const";
import { IP_ADDRESS, SERVER_PORT } from "../utils/utils.env";
import { MBTIResultType } from "../redux/interfaces/progressInterface";
import { IReducer } from "../redux";
import html2canvas from "html2canvas";
import HomeButton from "../components/HomeButton";

declare const window: any;

interface Props {}
const ResultPage: React.FC<Props> = (props) => {
  const { mbti } = useParams<{ mbti: string }>();
  const MBTI: MBTIResultType = mbti.toUpperCase() as MBTIResultType;

  const hiddenRef = useRef<HTMLTextAreaElement>(null);
  const progress = useSelector((state: IReducer) => state.progress);

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
          mobileWebUrl: `http://${IP_ADDRESS}:80`,
          webUrl: `http://${IP_ADDRESS}:80`,
        },
      },
      buttons: [
        {
          title: "결과보기",
          link: {
            mobileWebUrl: `http://${IP_ADDRESS}:80/${MBTI}`,
            webUrl: `http://${IP_ADDRESS}:80/${MBTI}`,
          },
        },
        {
          title: "테스트하기",
          link: {
            mobileWebUrl: `http://${IP_ADDRESS}:80/start`,
            webUrl: `http://${IP_ADDRESS}:80/start`,
          },
        },
      ],
    });
  };

  useEffect(() => {
    kakaoInit();
  }, []);

  const onShare = (where: "link" | "instagram" | "kakao") => {
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
        }
        break;
      case "instagram":
        break;
      case "kakao":
        break;
    }
  };

  const downloadImage = async () => {
    const container = document.getElementById("result-container");
    if (container) {
      document.getElementById("hidden-url")?.classList.add("show");
      document.getElementById("result-buttons")?.classList.add("hide");

      await html2canvas(container).then((canvas) => {
        onSaveAs(canvas.toDataURL("image/png"), "kaist-mbti.png");
      });

      document.getElementById("hidden-url")?.classList.remove("show");
      document.getElementById("result-buttons")?.classList.remove("hide");
    }
  };

  const onSaveAs = (uri: string, fileName: string) => {
    let link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = fileName;
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="animation-fade-in" />
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
      </div>
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
          <button className="small-button" onClick={() => downloadImage()}>
            <FiImage style={{ color: "black" }} className="share-svg" />
          </button>
          <button
            className="small-button"
            id="kakao-link-btn"
            onClick={() => onShare("kakao")}
          >
            <RiKakaoTalkFill className="share-svg" fill={"black"} />
          </button>
        </div>
      </div>
      <HomeButton showDeveloper />
    </>
  );
};

export default ResultPage;
