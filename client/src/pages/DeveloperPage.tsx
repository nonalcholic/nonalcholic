import React, { useEffect, useState } from "react";
import Developer from "../components/Developer";

interface Props {}
const DeveloperPage: React.FC<Props> = (props) => {
  return (
    <>
      <Developer
        name="유주형"
        mbti="ENFJ"
        image={require("../assets/yuz.png").default}
        description="KAIST 전산학부 16학번 유주형입니다. 현재 졸업 후, 클라썸에서 개발자로 일하는 중."
      />
      <Developer
        name="이민지"
        mbti="INTJ"
        image={require("../assets/minji.png").default}
        description="KAIST 전산학부 16학번 이민지입니다. 현재 졸업 후, NC soft에서 개발자로 일하는 중."
      />
    </>
  );
};

export default DeveloperPage;
