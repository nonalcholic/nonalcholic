import "./CompareBarGraph.scss";
import React, { useEffect, useState } from "react";
import { EachMBTIText } from "../utils/utils.const";

interface Props {
  data: { [key: string]: number };
  compare: { left: string; right: string }[];
  maxCount: number;
  showMBTI: boolean;
}
const CompareBarGraph: React.FC<Props> = (props) => {
  const { data, compare, maxCount, showMBTI } = props;

  const getStyle = (data: number) => {
    return {
      width: "calc(" + (data * 100) / maxCount + "%)",
    };
  };

  return (
    <div className="compare-graph">
      {compare.map((_compare, i) => {
        return (
          <div className="comparable" key={i}>
            <div className="type">
              {showMBTI ? _compare.left : EachMBTIText[_compare.left]}
            </div>
            <div className="bar-container">
              <div className="bar left" style={getStyle(data[_compare.left])}>
                <div className="count">{data[_compare.left]}</div>
              </div>
            </div>
            <div className="bar-container">
              <div className="bar right" style={getStyle(data[_compare.right])}>
                <div className="count">{data[_compare.right]}</div>
              </div>
            </div>
            <div className="type">
              {showMBTI ? _compare.right : EachMBTIText[_compare.right]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompareBarGraph;
