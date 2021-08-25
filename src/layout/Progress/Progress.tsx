import "./Progress.css";
import React, { useEffect, useState } from "react";

interface Props {
  stage: number;
}
const Progress: React.FC<Props> = (props) => {
  return <>{props.stage}</>;
};

export default Progress;
