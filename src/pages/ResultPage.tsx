import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IReducer } from "../redux";
import { resetProgress } from "../redux/progress";
import { QuestionInfo } from "../utils/utils.const";

interface Props {}
const ResultPage: React.FC<Props> = (props) => {
  const progress = useSelector((state: IReducer) => state.progress);
  const history = useHistory();
  const dispatch = useDispatch();

  const caculateMBTI = () => {
    let EI = 0;
    let SN = 0;
    let TF = 0;
    let JP = 0;
    progress.answerData.forEach((answer) => {
      const question = QuestionInfo[answer.id];

      switch (question.type) {
        case "EI":
          EI += answer.score;
          break;
        case "SN":
          SN += answer.score;
          break;
        case "TF":
          TF += answer.score;
          break;
        case "JP":
          JP += answer.score;
          break;
      }
    });

    let result = "";
    if (EI > 0) result += "E";
    else result += "I";
    if (SN > 0) result += "S";
    else result += "N";
    if (TF > 0) result += "T";
    else result += "F";
    if (JP > 0) result += "J";
    else result += "P";

    return result;
  };
  return (
    <>
      {caculateMBTI()}
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
