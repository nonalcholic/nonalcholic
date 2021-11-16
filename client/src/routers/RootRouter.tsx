import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProgressPage from "../pages/ProgressPage";
import ResultPage from "../pages/ResultPage";
import StartPage from "../pages/StartPage";
import "./RootRouter.scss";
import StatisticsPage from "../pages/StatisticsPage";
import DeveloperPage from "../pages/DeveloperPage";
import { isMBTIResult } from "../utils/utils.calculate";

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
        <Route
          exact
          path="/:mbti"
          render={(routeProps) => {
            const mbti = routeProps.match.params["mbti"];

            if (isMBTIResult(mbti)) return <ResultPage />;
            else return <Redirect to={`/start`} />;
          }}
        />
        <Route path={"*"}>
          <Redirect to={"/start"} />
        </Route>
      </Switch>
    </div>
  );
};

export default RootRouter;
