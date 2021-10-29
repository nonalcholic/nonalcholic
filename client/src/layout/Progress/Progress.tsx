import React, { useEffect, useState } from "react";
import { Answer, QuestionData } from "../../redux/interfaces/progressInterface";
import { answerProgress, nextProgress } from "../../redux/progress";
import { useDispatch } from "react-redux";

interface Props {
  currentProgress: QuestionData;
}
const Progress: React.FC<Props> = (props) => {
  const { currentProgress } = props;
  const dispatch = useDispatch();

  const [showA, setShowA] = useState<boolean>(false);
  const [showB, setShowB] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClickAnswer = (ans: Answer) => {
    setShowA(false);
    setShowB(false);
    setIsLoading(true);
    setTimeout(() => {
      answerProgress({
        id: currentProgress.id,
        score: ans,
      })(dispatch);
      nextProgress()(dispatch);
    }, 500);
  };

  useEffect(() => {
    setShowA(true);
    setTimeout(() => setShowB(true), 400);
    setTimeout(() => setIsLoading(false), 800);
  }, [currentProgress?.id]);

  return (
    <>
      <span
        className="emoji"
        style={{
          marginTop: "24px",
          marginBottom: "10px",
        }}
      >
        {currentProgress?.emoji}
      </span>
      <span className="context">{currentProgress?.question}</span>
      <button
        className={`extra-large-button ${showA} ${isLoading ? "loading" : ""}`}
        onClick={() => {
          onClickAnswer(currentProgress?.choiceA?.type);
        }}
        style={{ margin: "auto 0 24px" }}
      >
        {currentProgress?.choiceA?.text}
      </button>
      <button
        className={`extra-large-button ${showB} ${isLoading ? "loading" : ""}`}
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
