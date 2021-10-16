import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useHistory } from "react-router";
import Developer from "../components/Developer";

interface Props {}
const DeveloperPage: React.FC<Props> = (props) => {
  const history = useHistory();
  return (
    <>
      <div className="header">
        <button
          className="small-button"
          style={{ marginRight: 4 }}
          onClick={() => history.push(".")}
        >
          <AiOutlineHome />
        </button>
        Developer
      </div>
      <Developer
        name="@jackson"
        mbti="ENFJ"
        image={require("../assets/yuz.png").default}
        subdescription="맥주 들고 신학관 옥상으로 따라와!"
        description_1="KAIST CS 16"
        description_2="CLASSUM"
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
        instagram="leeminxji"
        email="leeminxji@gmail.com"
      />
    </>
  );
};

export default DeveloperPage;
