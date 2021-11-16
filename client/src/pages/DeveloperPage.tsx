import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Developer from "../components/Developer";
import HomeButton from "../components/HomeButton";

interface Props {}
const DeveloperPage: React.FC<Props> = (props) => {
  const [showA, setShowA] = useState<boolean>(false);
  const [showB, setShowB] = useState<boolean>(false);

  useEffect(() => {
    setShowA(true);
    setTimeout(() => setShowB(true), 400);
  }, []);
  return (
    <>
      <span className="title">{"만든이들"}</span>
      {showA && (
        <Developer
          name="@usual_yuz"
          mbti="ENFJ"
          image={require("../assets/developer/yuz.png").default}
          subdescription="맥주 들고 신학관 옥상으로 따라와!"
          description_1="KAIST CS 16"
          description_2="CLASSUM"
          description_3="Web Developer"
          instagram="usual_yuz"
          email="gogodbwngud@gmail.com"
        />
      )}
      {showB && (
        <Developer
          name="@minx"
          mbti="INTJ"
          image={require("../assets/developer/minx.JPG").default}
          subdescription="교분 2층 B-22 지박령"
          description_1="KAIST CS 16"
          description_2="NCSOFT"
          description_3="MLOps Developer"
          instagram="leeminxji"
          email="leeminxji@gmail.com"
        />
      )}
      <div className="hint" style={{ marginTop: 30 }}>
        <span className="hint" style={{ marginBottom: 8 }}>
          도움 주신 분
        </span>
        <a href={`https://www.instagram.com/nupjuki`} target="_blank">
          @nupjuki
        </a>
        <a href={`https://www.instagram.com/sehoney.jang`} target="_blank">
          @sehoney.jang
        </a>
        <br />
      </div>
      <HomeButton />
    </>
  );
};

export default DeveloperPage;
