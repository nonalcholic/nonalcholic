import "./CompareBarGraph.scss";
import React, { useEffect, useState } from "react";

interface Props {
  data: { [key: string]: number };
  compare: { left: string; right: string }[];
}
const CompareBarGraph: React.FC<Props> = (props) => {
  const { data, compare } = props;

  return (
    <>
      {compare.map((_compare) => {
        return (
          <div>
            {`
                ${_compare.left} : ${data[_compare.left]} vs ${
              _compare.right
            } : ${data[_compare.right]}`}
          </div>
        );
      })}
    </>
  );
};

export default CompareBarGraph;
