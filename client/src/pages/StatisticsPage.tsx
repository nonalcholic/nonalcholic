import React, { useEffect, useState } from "react";
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

  return <div></div>;
};

export default StatisticsPage;
