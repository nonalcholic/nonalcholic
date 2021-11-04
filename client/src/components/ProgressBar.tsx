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
    height: 28,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginTop: "20px",
  };

  const fillerStyles = {
    height: 28,
    width: `${completed}%`,
    minWidth: 32,
    backgroundColor: "#cec0af",
    borderRadius: "inherit",
    textAlign: "right" as "right",
    transition: "width 0.5s ease-in-out",
    paddingRight: 4,
    color: "white",
    fontSize: 14,
    lineHeight: "28px",
    fontWeight: "bold" as "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        {(progress.currentProgress === 12 ? 12 : progress.currentProgress + 1) +
          "/12"}
      </div>
    </div>
  );
};

export default ProgressBar;
