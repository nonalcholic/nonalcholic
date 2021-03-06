import "./BarGraph.scss";
import React from "react";
import { MBTIResultType } from "../redux/interfaces/progressInterface";
import { MBTIResult } from "../utils/utils.const";
import { useHistory } from "react-router";

interface Props {
  data: {
    Type: MBTIResultType;
    Count: number;
    WidthPercent: number;
    Percent: number;
  }[];
  totalCount: number;
  maxCount: number;
  showMBTI: boolean;
}
const BarGraph: React.FC<Props> = (props) => {
  const { data, showMBTI } = props;
  const history = useHistory();

  const getStyle = (data: {
    Type: MBTIResultType;
    Count: number;
    WidthPercent: number;
    Percent: number;
  }) => {
    const temp = Math.floor((155 * data.Count) / props.maxCount) + 100;
    return {
      backgroundColor: "#e9e999" + temp.toString(16),
      width: data.WidthPercent + "%",
    };
  };

  return (
    <>
      <div className="bar-graph">
        {data.map((_data, i) => (
          <div className="element" key={i}>
            <span
              className="type"
              onClick={() => history.push(`/${_data.Type}`)}
            >
              {showMBTI ? _data.Type : MBTIResult[_data.Type].abstract}
            </span>
            <div className="bar-container">
              <div className="bar" style={getStyle(_data)}>
                <span className="count">{_data.Count + "명"}</span>
              </div>
            </div>
            <span className="percent">{Math.round(_data.Percent) + "%"}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default BarGraph;
