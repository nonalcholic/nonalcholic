import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useHistory } from "react-router";
import Developer from "../components/Developer";

interface Props {}
const DeveloperPage: React.FC<Props> = (props) => {
  const history = useHistory();
  return (
    <>
      <span className="title">{"만든이들"}</span>
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
      <div className="home-container">
        <button
          className="home-button"
          style={{
            marginTop: "auto",
          }}
          onClick={() => {
            history.push(".");
          }}
        >
          메인으로
        </button>
      </div>
    </>
  );
};

export default DeveloperPage;
