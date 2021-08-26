import "./Progress.css";
import React from "react";
import { QuestionData } from "../../redux/interfaces/progressInterface";
import {
  answerProgress,
  nextProgress,
  prevProgress,
} from "../../redux/progress";
import { useDispatch } from "react-redux";
import { TOTAL_PROGRESS_NUMBER } from "../../utils/utils.const";
import { useHistory } from "react-router-dom";

interface Props {
  currentProgress: QuestionData;
}
const Progress: React.FC<Props> = (props) => {
  const { currentProgress } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <button
        onClick={() => {
          prevProgress()(dispatch);
        }}
      >
        이전으로
      </button>
      <button
        onClick={() => {
          nextProgress()(dispatch);
        }}
      >
        다음으로
      </button>
      <div>{currentProgress.id}</div>
      <div>{currentProgress.question}</div>
      <button
        onClick={() => {
          answerProgress({
            id: currentProgress.id,
            score: currentProgress.choiceA.type,
          })(dispatch);
          nextProgress()(dispatch);
        }}
      >
        {currentProgress.choiceA.text}
      </button>
      <button
        onClick={() => {
          answerProgress({
            id: currentProgress.id,
            score: currentProgress.choiceB.type,
          })(dispatch);
          nextProgress()(dispatch);
        }}
      >
        {currentProgress.choiceB.text}
      </button>
      {currentProgress.id === TOTAL_PROGRESS_NUMBER - 1 && (
        <button onClick={() => history.push("/result")}>결과보기</button>
      )}
    </>
  );
};

export default Progress;
