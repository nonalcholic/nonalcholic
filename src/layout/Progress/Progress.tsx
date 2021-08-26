import "./Progress.css";
import React from "react";
import { QuestionData } from "../../redux/interfaces/progressInterface";
import { nextProgress, prevProgress } from "../../redux/progress";
import { useDispatch } from "react-redux";

interface Props {
  currentProgress: QuestionData;
}
const Progress: React.FC<Props> = (props) => {
  const { currentProgress } = props;
  const dispatch = useDispatch();

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
      <div>{currentProgress.answerA}</div>
      <div>{currentProgress.answerB}</div>
    </>
  );
};

export default Progress;
