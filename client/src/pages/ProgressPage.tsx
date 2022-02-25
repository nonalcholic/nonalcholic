import React, { useEffect, useState } from "react";
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
import { v1 as uuid } from "uuid";
import HomeButton from "../components/HomeButton";

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
    } catch (e) {}
  };

  const sendResult = async () => {
    setAnimation(true);

    const result = caculateMBTI(progress.answerData);

    // try {
    //   const body: ResultInterface = {
    //     id: progress.id,
    //     answers: progress.answerData.map((ans) => ans.score),
    //     result: result,
    //   };
    //   await fetch(`http://${IP_ADDRESS}:${SERVER_PORT}/result`, {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(body),
    //   });
    // } catch (e) {}

    setTimeout(() => {
      history.push(`/${result}`);
      resetProgress()(dispatch);
    }, 1000);
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
      <HomeButton />
    </>
  );
};

export default ProgressPage;
