import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ProgressBar from "../components/ProgressBar";
import Progress from "../layout/Progress/Progress";
import { IReducer } from "../redux";
import { ResultInterface } from "../redux/interfaces/dataInterface";
import { resetProgress } from "../redux/progress";
import { caculateMBTI } from "../utils/utils.calculate";
import { QuestionInfo, TOTAL_PROGRESS_NUMBER } from "../utils/utils.const";
import { IP_ADDRESS, SERVER_PORT } from "../utils/utils.env";
import { getIdCookie, getIpCookie } from "../utils/utils.identification";

interface Props {}
const ProgressPage: React.FC<Props> = (props) => {
  const progress = useSelector((state: IReducer) => state.progress);
  const history = useHistory();
  const dispatch = useDispatch();

  const [animation, setAnimation] = useState<boolean>(false);

  const sendResult = async () => {
    setAnimation(true);

    const result = caculateMBTI(progress.answerData);

    const body: ResultInterface = {
      id: getIdCookie(),
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

    setTimeout(() => history.push(`/${result}`), 1000);
  };

  useEffect(() => {
    if (progress.currentProgress === TOTAL_PROGRESS_NUMBER) {
      sendResult();
    }
  }, [progress.currentProgress]);
  return (
    <>
      <div className="header">
        <button
          className="small-button"
          onClick={() => {
            resetProgress()(dispatch);
            history.push(".");
          }}
        >
          <AiOutlineHome />
        </button>
      </div>
      <ProgressBar />
      <Progress currentProgress={QuestionInfo[progress.currentProgress]} />
      {animation && <div className="animation-fade-out" />}
    </>
  );
};

export default ProgressPage;
