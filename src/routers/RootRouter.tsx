import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProgressPage from "../pages/ProgressPage";
import ResultPage from "../pages/ResultPage";
import StartPage from "../pages/StartPage";

interface Props {}
const RooterRouter: React.FC<Props> = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/start" />
      </Route>
      <Route exact path="/start">
        <StartPage />
      </Route>
      <Route exact path="/process">
        <ProgressPage />
      </Route>
      <Route exact path="/result">
        <ResultPage />
      </Route>
    </Switch>
  );
};

export default RooterRouter;
