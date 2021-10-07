import React, { useEffect, useState } from "react";
import BarGraph from "../components/BarGraph";
import CompareBarGraph from "../components/CompareBarGraph";
import { StatisticsDto } from "../redux/interfaces/statisticsInterface";
import { IP_ADDRESS, MBTIList, MBTIListElem } from "../utils/utils.const";

interface Props {}

interface MBTIInterface {
  types: MBTIListElem[];
}

const StatisticsPage: React.FC<Props> = (props) => {
  const [data, setData] = useState<StatisticsDto>();

  useEffect(() => {
    const fetchResult = async () => {
      const body: MBTIInterface = {
        types: MBTIList,
      };
      const res = await fetch(`http://${IP_ADDRESS}:9999/statistics`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setData(data);
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
    if (!data) return { data: {}, compare: [] };

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
    return { data: result, compare: compare };
  };

  return (
    <>
      {data && (
        <>
          <BarGraph {...calculateData()} />
          <CompareBarGraph {...calculateCompareData()} />
        </>
      )}
    </>
  );
};

export default StatisticsPage;
