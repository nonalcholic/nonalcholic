import React, { useEffect, useState } from "react";
import Developer from "../components/Developer";

interface Props {}
const DeveloperPage: React.FC<Props> = (props) => {
  return (
    <>
      <div className="title" style={{ marginBottom: 24 }}>
        Developer
      </div>
      <Developer
        name="유주형"
        mbti="ENFJ"
        image={require("../assets/yuz.png").default}
        description="KAIST 전산학부 16학번 유주형입니다. 현재 졸업 후, 클라썸에서 개발자로 일하는 중."
        instagram="@usual_yuz"
        email="gogodbwngud@gmail.com"
      />
      <Developer
        name="이민지"
        mbti="INTJ"
        image={require("../assets/minji.png").default}
        description="KAIST 전산학부 16학번 이민지입니다. 현재 졸업 후, NC soft에서 개발자로 일하는 중."
        instagram="@leeminxji"
        email="leeminxji@gmail.com"
      />
    </>
  );
};

export default DeveloperPage;
