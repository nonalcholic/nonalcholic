import "./BarGraph.scss";
import React, { useEffect, useState } from "react";
import { MBTIResultType } from "../redux/interfaces/progressInterface";

interface Props {
  data: {
    Type: MBTIResultType;
    Count: number;
    WidthPercent: number;
    Percent: number;
  }[];
  totalCount: number;
  maxCount: number;
}
const BarGraph: React.FC<Props> = (props) => {
  const { data } = props;

  const getStyle = (data: {
    Type: MBTIResultType;
    Count: number;
    WidthPercent: number;
    Percent: number;
  }) => {
    const temp = Math.floor((155 * data.Count) / props.maxCount) + 100;
    console.log(data.Count, temp);
    return {
      backgroundColor: "#e9e999" + temp.toString(16),
      width: "calc(" + data.WidthPercent + "% - 128px)",
    };
  };

  return (
    <div className="bar-graph">
      {data.map((_data, i) => (
        <div className="element" key={i}>
          <span className="type">{_data.Type}</span>
          <div className="bar" style={getStyle(_data)}></div>
          <span className="count">
            {_data.Count + "(" + Math.round(_data.Percent) + "%)"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BarGraph;
