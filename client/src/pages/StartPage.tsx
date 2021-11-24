import "./StartPage.scss";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { DescriptionInfo } from "../utils/utils.const";

interface Props {}

const StartPage: React.FC<Props> = (props) => {
  const history = useHistory();

  const [animation, setAnimation] = useState<boolean>(true);
  const [showDescription, setShowDescription] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 1000);
  }, []);

  return (
    <>
      {animation && <div className="animation-fade-in" />}
      <div className="main-image-container">
        <span className="title with-image">
          {"나에게 딱 맞는\n카이스트 장소는 어디?"}
        </span>
        <img
          className="main-image"
          src={require("../assets/main.png").default}
          alt="main"
        />
      </div>
      <div className={`buttons-container ${showDescription}`}>
        <button
          className="large-button"
          onClick={() => setShowDescription(true)}
        >
          시작하기
        </button>
        <button
          className="large-button"
          onClick={() => history.push("/statistics")}
        >
          통계
        </button>
      </div>
      <div className={`description-containers ${showDescription}`}>
        {DescriptionInfo}
        <button
          className="large-button"
          onClick={() => history.push("/progress")}
        >
          좋아요!
        </button>
      </div>

      <span className="hint bottom-fixed" style={{ padding: "12px 0 20px" }}>
        {"이 사이트는 KAIST의 공식 페이지가 아닌\n졸업생이 제작한 페이지입니다"}
        <button
          className="hint-button"
          style={{ marginTop: 12 }}
          onClick={() => history.push("/developer")}
        >
          만든이
        </button>
      </span>
    </>
  );
};

export default StartPage;
