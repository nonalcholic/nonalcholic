import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IP_ADDRESS, MBTIList, MBTIListElem } from "../utils/utils.const";

interface Props {}
interface MBTIInterface {
  types: MBTIListElem[];
}

const StartPage: React.FC<Props> = (props) => {
  const history = useHistory();

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
      console.log(data);
    };
    fetchResult();
  }, []);

  return (
    <>
      <span className="context" style={{ height: 400 }}>
        카이스트 MBTI
      </span>
      <span className="description" style={{ marginBottom: 48 }}>
        {"유사 과학일수도 아닐수도.\n재미있으면 됐지."}
      </span>
      <button
        className="large-button"
        onClick={() => history.push("/progress")}
        style={{ marginBottom: 24 }}
      >
        시작하기
      </button>
      <span className="hint" style={{ marginTop: "auto" }}>
        {"본 검사는 KAIST의 공식 페이지가 아닌, 졸업생이 제작한 페이지입니다."}
      </span>
    </>
  );
};

export default StartPage;
