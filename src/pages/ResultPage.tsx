import React from "react";
import { useHistory } from "react-router-dom";

interface Props {}
const ResultPage: React.FC<Props> = (props) => {
  const history = useHistory();

  return <button onClick={() => history.push("/start")}>처음으로</button>;
};

export default ResultPage;
