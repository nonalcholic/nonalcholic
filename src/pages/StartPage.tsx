import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

interface Props {}
const StartPage: React.FC<Props> = (props) => {
  const history = useHistory();

  useEffect(() => {
    console.log(history);
    return () => {};
  }, []);

  return <button onClick={() => history.push("/progress")}>시작하기</button>;
};

export default StartPage;
