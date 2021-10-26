import "./StatisticsPage.scss";
import React, { useEffect, useState } from "react";
import BarGraph from "../components/BarGraph";
import CompareBarGraph from "../components/CompareBarGraph";
import { StatisticsDto } from "../redux/interfaces/statisticsInterface";
import { MBTIList, MBTIListElem } from "../utils/utils.const";
import { IP_ADDRESS, SERVER_PORT } from "../utils/utils.env";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { useHistory } from "react-router";

interface Props {}

interface MBTIInterface {
  types: MBTIListElem[];
}

const StatisticsPage: React.FC<Props> = (props) => {
  const history = useHistory();

  const [data, setData] = useState<StatisticsDto>();
  const [showMBTI, setShowMBTI] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchResult = async () => {
      const body: MBTIInterface = {
        types: MBTIList,
      };
      const res = await fetch(
        `http://${IP_ADDRESS}:${SERVER_PORT}/statistics`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const data: StatisticsDto = await res.json();
      setData(data);

      const totalCount = data.results.reduce((total, _data) => {
        total += _data.Count;
        return total;
      }, 0);
      setTotal(totalCount);
    };
    fetchResult();
  }, []);

  const calculateData = () => {
    if (!data) return { data: [], maxCount: 1, totalCount: 0 };

    const sortedData = data.results.sort((a, b) => b.Count - a.Count);
    const maxCount = sortedData[0].Count;
    const totalCount = sortedData.reduce((total, _data) => {
      total += _data.Count;
      return total;
    }, 0);
    // setTotal(totalCount);

    return {
      data: sortedData.map((_data) => {
        return {
          WidthPercent: (_data.Count * 100) / maxCount,
          Percent: (_data.Count * 100) / totalCount,
          ..._data,
        };
      }),
      maxCount: maxCount,
      totalCount: totalCount,
    };
  };

  const calculateCompareData = () => {
    if (!data) return { data: {}, compare: [], maxCount: 1 };

    const result: { [key: string]: number } = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };
    data.results.forEach((_data) => {
      _data.Type.split("").forEach((t) => {
        result[t] += _data.Count;
      });
    });
    const compare = [
      { left: "E", right: "I" },
      { left: "S", right: "N" },
      { left: "T", right: "F" },
      { left: "J", right: "P" },
    ];
    let maxCount = 0;
    Object.entries(result).forEach(([key, count]) => {
      if (maxCount < count) maxCount = count;
    });
    return { data: result, compare: compare, maxCount: maxCount };
  };

  return (
    <>
      <span className="title">{"통계"}</span>
      <div className="header">
        <div className="total-count">
          총 {total} 명이 테스트에 참여했습니다.
        </div>
        <button
          className="show-mbti"
          style={{ marginLeft: "auto" }}
          onClick={() => setShowMBTI((prev) => !prev)}
        >
          {showMBTI ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          MBTI로 보기
        </button>
      </div>

      {data && (
        <>
          <BarGraph {...calculateData()} showMBTI={showMBTI} />
          <CompareBarGraph {...calculateCompareData()} showMBTI={showMBTI} />
        </>
      )}
      <div className="home-container">
        <button
          className="home-button"
          style={{
            marginTop: "auto",
            color: "lightgray",
          }}
          onClick={() => {
            history.push(".");
          }}
        >
          <AiOutlineHome />
        </button>
      </div>
    </>
  );
};

export default StatisticsPage;
