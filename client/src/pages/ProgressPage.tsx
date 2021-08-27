import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Progress from "../layout/Progress/Progress";
import { IReducer } from "../redux";
import { QuestionInfo } from "../utils/utils.const";

interface Props {}
const ProgressPage: React.FC<Props> = (props) => {
  const progress = useSelector((state: IReducer) => state.progress);

  return (
    <>
      <Progress currentProgress={QuestionInfo[progress.currentProgress]} />
    </>
  );
};

export default ProgressPage;
