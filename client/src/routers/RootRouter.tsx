import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProgressPage from "../pages/ProgressPage";
import ResultPage from "../pages/ResultPage";
import StartPage from "../pages/StartPage";
import { setIdCookie, setIpCookie } from "../utils/utils.identification";
import "./RootRouter.scss";
import { v1 as uuid } from "uuid";
import axios from "axios";

declare const window: any;

interface Props {}
const RootRouter: React.FC<Props> = (props) => {
  useEffect(() => {
    const id = uuid();
    setIdCookie(id);
    console.log(id);

    axios.get("https://geolocation-db.com/json/").then(async (res) => {
      setIpCookie(res.data["IPv4"]);
    });

    window.Kakao.init("7281c5f7129e05440500f936dedee302");
    console.log(window.Kakao.isInitialized());
  }, []);

  return (
    <div className="root-container">
      <Switch>
        <Route exact path="/">
          <Redirect to="/start" />
        </Route>
        <Route exact path="/start">
          <StartPage />
        </Route>
        <Route exact path="/progress">
          <ProgressPage />
        </Route>
        <Route path="/:mbti">
          <ResultPage />
        </Route>
      </Switch>
    </div>
  );
};

export default RootRouter;
