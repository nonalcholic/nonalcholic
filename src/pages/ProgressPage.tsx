import React from "react";
import Progress from "../layout/Progress/Progress";

interface Props {}
const ProgressPage: React.FC<Props> = (props) => {
  const currentStage = 1;

  return (
    <>
      <Progress stage={currentStage} />
    </>
  );
};

export default ProgressPage;
