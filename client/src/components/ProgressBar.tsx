import React from "react";
import { useSelector } from "react-redux";
import { IReducer } from "../redux";

interface Props {}
const ProgressBar: React.FC<Props> = (props) => {
  const progress = useSelector((state: IReducer) => state.progress);
  const completed =
    progress.currentProgress === 12
      ? 100
      : ((progress.currentProgress + 1) * 100) / 12;
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: 20,
    width: `${completed}%`,
    backgroundColor: "#cec0af",
    borderRadius: "inherit",
    textAlign: "right" as "right",
    transition: "width 0.5s ease-in-out",
    paddingRight: 4,
    color: "white",
    fontSize: 12,
    lineHeight: "20px",
    fontWeight: "bold" as "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        {progress.currentProgress === 12 ? 12 : progress.currentProgress + 1}
        /12
      </div>
    </div>
  );
};

export default ProgressBar;
