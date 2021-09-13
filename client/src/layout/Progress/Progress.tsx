import "./Progress.css";
import React from "react";
import { Answer, QuestionData } from "../../redux/interfaces/progressInterface";
import { answerProgress, nextProgress } from "../../redux/progress";
import { useDispatch, useSelector } from "react-redux";
import { TOTAL_PROGRESS_NUMBER } from "../../utils/utils.const";
import { useHistory } from "react-router-dom";
import { caculateMBTI } from "../../utils/utils.calculate";
import { IReducer } from "../../redux";

interface Props {
  currentProgress: QuestionData;
}
const Progress: React.FC<Props> = (props) => {
  const { currentProgress } = props;
  const progress = useSelector((state: IReducer) => state.progress);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickAnswer = (ans: Answer) => {
    answerProgress({
      id: currentProgress.id,
      score: ans,
    })(dispatch);
    nextProgress()(dispatch);

    if (currentProgress.id === TOTAL_PROGRESS_NUMBER - 1)
      history.push(`/${caculateMBTI(progress.answerData)}`);
  };

  return (
    <>
      <div>{currentProgress.id}</div>
      <div>{currentProgress.question}</div>
      <button
        onClick={() => {
          onClickAnswer(currentProgress.choiceA.type);
        }}
      >
        {currentProgress.choiceA.text}
      </button>
      <button
        onClick={() => {
          onClickAnswer(currentProgress.choiceB.type);
        }}
      >
        {currentProgress.choiceB.text}
      </button>
    </>
  );
};

export default Progress;
