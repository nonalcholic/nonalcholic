import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ProgressBar from "../components/ProgressBar";
import Progress from "../layout/Progress/Progress";
import { IReducer } from "../redux";
import { ResultInterface } from "../redux/interfaces/dataInterface";
import { resetProgress, setId } from "../redux/progress";
import { caculateMBTI } from "../utils/utils.calculate";
import { QuestionInfo, TOTAL_PROGRESS_NUMBER } from "../utils/utils.const";
import { IP_ADDRESS, SERVER_PORT } from "../utils/utils.env";
import { getIpCookie, setIpCookie } from "../utils/utils.identification";
import { v1 as uuid } from "uuid";

declare const window: any;

interface Props {}
const ProgressPage: React.FC<Props> = (props) => {
  const progress = useSelector((state: IReducer) => state.progress);
  const history = useHistory();
  const dispatch = useDispatch();

  const [animation, setAnimation] = useState<boolean>(false);

  const setInfo = () => {
    try {
      const id = uuid();
      setId(id)(dispatch);

      axios.get("https://geolocation-db.com/json/").then(async (res) => {
        setIpCookie(res.data["IPv4"]);
      });

      window.Kakao.init("7281c5f7129e05440500f936dedee302");
    } catch (e) {}
  };

  const sendResult = async () => {
    setAnimation(true);

    const result = caculateMBTI(progress.answerData);

    try {
      const body: ResultInterface = {
        id: progress.id,
        answers: progress.answerData.map((ans) => ans.score),
        result: result,
        ip: getIpCookie(),
      };
      await fetch(`http://${IP_ADDRESS}:${SERVER_PORT}/result`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    } catch (e) {}

    setTimeout(() => history.push(`/${result}`), 1000);
  };

  useEffect(() => {
    if (progress.currentProgress === 0) {
      setInfo();
    }
    if (progress.currentProgress === TOTAL_PROGRESS_NUMBER) {
      sendResult();
    }
  }, [progress.currentProgress]);

  return (
    <>
      <ProgressBar />
      <Progress currentProgress={QuestionInfo[progress.currentProgress]} />
      {animation && <div className="animation-fade-out" />}
      <div className="home-container">
        <button
          className="home-button"
          style={{
            marginTop: "auto",
            color: "lightgray",
          }}
          onClick={() => {
            resetProgress()(dispatch);
            history.push(".");
          }}
        >
          <AiOutlineHome />
        </button>
      </div>
    </>
  );
};

export default ProgressPage;
