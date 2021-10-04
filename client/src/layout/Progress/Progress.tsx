import React from "react";
import { Answer, QuestionData } from "../../redux/interfaces/progressInterface";
import { answerProgress, nextProgress } from "../../redux/progress";
import { useDispatch } from "react-redux";

interface Props {
  currentProgress: QuestionData;
}
const Progress: React.FC<Props> = (props) => {
  const { currentProgress } = props;
  const dispatch = useDispatch();

  const onClickAnswer = (ans: Answer) => {
    answerProgress({
      id: currentProgress.id,
      score: ans,
    })(dispatch);
    nextProgress()(dispatch);
  };

  return (
    <>
      <span className="title" style={{ marginBottom: 24 }}>
        {currentProgress?.question}
      </span>
      <button
        className="extra-large-button"
        onClick={() => {
          onClickAnswer(currentProgress?.choiceA?.type);
        }}
        style={{ marginBottom: 24 }}
      >
        {currentProgress?.choiceA?.text}
      </button>
      <button
        className="extra-large-button"
        onClick={() => {
          onClickAnswer(currentProgress?.choiceB?.type);
        }}
      >
        {currentProgress?.choiceB?.text}
      </button>
    </>
  );
};

export default Progress;
