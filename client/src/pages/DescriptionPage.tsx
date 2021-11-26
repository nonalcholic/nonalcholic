import React from "react";
import { useHistory } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import { DescriptionInfo } from "../utils/utils.const";
import "./DescriptionPage.scss";

interface Props { }
const DescriptionPage: React.FC<Props> = () => {
  const history = useHistory();

  return (
    <>
      <div className="description-container">
        <span className="title">
          시작 전 설명
          {/* {"나에게 딱 맞는\n카이스트 장소는 어디?"} */}
        </span>
        <span className="description-text">
          {DescriptionInfo}
        </span>
        <div className="button-container">
          <button
            className="large-button"
            onClick={() => history.push("/progress")}
          >
            시작하기
          </button>
        </div>
      </div>
      <HomeButton showDeveloper showStatistics />
    </>
  );
};

export default DescriptionPage;
