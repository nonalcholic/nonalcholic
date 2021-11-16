import "./HomeButton.scss";
import React, { useState } from "react";
import { resetProgress } from "../redux/progress";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

interface Props {
  showDeveloper?: boolean;
}
const HomeButton: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <div className="bottom-fixed">
        {props.showDeveloper && !isLoading && (
          <button
            className="hint-button"
            style={{ margin: "6px 0" }}
            onClick={() => history.push("/developer")}
          >
            만든이
          </button>
        )}
        <div
          className={`home-button ${isLoading}`}
          style={{
            marginTop: "auto",
          }}
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              resetProgress()(dispatch);
              history.push(".");
            }, 900);
          }}
        >
          {!isLoading && "kaist-mbti.me"}
        </div>
      </div>
    </>
  );
};

export default HomeButton;
