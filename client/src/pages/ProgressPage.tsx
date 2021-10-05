import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import ProgressBar from "../components/ProgressBar";
import Progress from "../layout/Progress/Progress";
import { IReducer } from "../redux";
import { caculateMBTI } from "../utils/utils.calculate";
import { QuestionInfo, TOTAL_PROGRESS_NUMBER } from "../utils/utils.const";

interface Props {}
const ProgressPage: React.FC<Props> = (props) => {
  const progress = useSelector((state: IReducer) => state.progress);
  const history = useHistory();

  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    if (progress.currentProgress === TOTAL_PROGRESS_NUMBER) {
      setAnimation(true);
      setTimeout(
        () => history.push(`/${caculateMBTI(progress.answerData)}`),
        1000
      );
    }
  }, [progress.currentProgress]);
  return (
    <>
      <ProgressBar />
      <Progress currentProgress={QuestionInfo[progress.currentProgress]} />
      {animation && <div className="animation-fade-out" />}
    </>
  );
};

export default ProgressPage;
