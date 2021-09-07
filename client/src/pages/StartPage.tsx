import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ResultInterface } from "../redux/interfaces/dataInterface";
import { getIdCookie } from "../utils/utils.identification";

interface Props {}
const StartPage: React.FC<Props> = (props) => {
  const history = useHistory();

  const onClickFunction = () => {
    axios.get("https://geolocation-db.com/json/").then(async (res) => {
      console.log(res.data["IPv4"]);

      const body: ResultInterface = {
        id: getIdCookie(),
        answers: [1, 0, -1],
        result: "ENFJ",
        ip: res.data["IPv4"],
      };

      await fetch("http://localhost:9999/test/message", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      // const text = await res.text();
      // console.log("text,", text);
    });
  };
  return (
    <>
      <button onClick={() => onClickFunction()}>요청 보내기</button>
      <button onClick={() => history.push("/progress")}>시작하기</button>
    </>
  );
};

export default StartPage;
