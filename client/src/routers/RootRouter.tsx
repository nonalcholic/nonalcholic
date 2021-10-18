import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProgressPage from "../pages/ProgressPage";
import ResultPage from "../pages/ResultPage";
import StartPage from "../pages/StartPage";
import "./RootRouter.scss";
import StatisticsPage from "../pages/StatisticsPage";
import DeveloperPage from "../pages/DeveloperPage";

interface Props {}
const RootRouter: React.FC<Props> = (props) => {
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
        <Route exact path="/statistics">
          <StatisticsPage />
        </Route>
        <Route exact path="/developer">
          <DeveloperPage />
        </Route>
        <Route path="/:mbti">
          <ResultPage />
        </Route>
      </Switch>
    </div>
  );
};

export default RootRouter;
