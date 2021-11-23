import "./StatisticsPage.scss";
import React, { useEffect, useState } from "react";
import BarGraph from "../components/BarGraph";
import CompareBarGraph from "../components/CompareBarGraph";
import { StatisticsDto } from "../redux/interfaces/statisticsInterface";
import { MBTIList, MBTIListElem } from "../utils/utils.const";
import { IP_ADDRESS, SERVER_PORT } from "../utils/utils.env";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import HomeButton from "../components/HomeButton";

interface Props {}

interface MBTIInterface {
  types: MBTIListElem[];
}

const StatisticsPage: React.FC<Props> = (props) => {
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
    const maxCount = sortedData[0].Count || 1;
    const totalCount =
      sortedData.reduce((total, _data) => {
        total += _data.Count;
        return total;
      }, 0) || 1;
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

  return (
    <>
      <span className="title">{"통계"}</span>
      <div className="header">
        <div className="total-count">총 {total} 명이 참여했어요!</div>
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
        </>
      )}
      <HomeButton />
    </>
  );
};

export default StatisticsPage;
