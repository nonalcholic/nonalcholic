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
          name="@jackson"
          mbti="ENFJ"
          image={require("../assets/yuz.png").default}
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
          image={require("../assets/minx.JPG").default}
          subdescription="교분 2층 B-22 지박령"
          description_1="KAIST CS 16"
          description_2="NCSOFT"
          description_3="MLOps Developer"
          instagram="leeminxji"
          email="leeminxji@gmail.com"
        />
      )}
      <HomeButton />
    </>
  );
};

export default DeveloperPage;
