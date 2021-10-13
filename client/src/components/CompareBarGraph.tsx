import "./CompareBarGraph.scss";
import React, { useEffect, useState } from "react";

interface Props {
  data: { [key: string]: number };
  compare: { left: string; right: string }[];
  maxCount: number;
}
const CompareBarGraph: React.FC<Props> = (props) => {
  const { data, compare, maxCount } = props;

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
            <div className="type">{_compare.left}</div>
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
            <div className="type">{_compare.right}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CompareBarGraph;
