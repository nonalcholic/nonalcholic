import React, { useEffect, useState } from "react";
import Developer from "../components/Developer";
import HomeButton from "../components/HomeButton";
import { RiGithubFill } from "react-icons/ri";

interface Props { }
const DeveloperPage: React.FC<Props> = (props) => {
  const [showA, setShowA] = useState<boolean>(false);
  const [showB, setShowB] = useState<boolean>(false);

  useEffect(() => {
    setShowA(true);
    setTimeout(() => setShowB(true), 400);
  }, []);
  return (
    <>
      <span className="title">만든이</span>
      {showA && (
        <Developer
          name="유주형"
          image={require("../assets/developer/yuz.png").default}
          subdescription="맥주 들고 신학관 옥상으로 따라와!"
          description_1="KAIST CS 16"
          description_2="CLASSUM"
          instagram="usual_yuz"
          email="gogodbwngud@gmail.com"
        />
      )}
      {showB && (
        <Developer
          name="이민지"
          image={require("../assets/developer/minx.JPG").default}
          subdescription="교분 2층 B-22 지박령"
          description_1="KAIST CS 16"
          description_2="NCSOFT"
          instagram="leeminxji"
          email="leeminxji@gmail.com"
        />
      )}
      <div className="hint2">
        {/* <span className="hint" style={{ marginBottom: 4 }}>
          GitHub Repository
        </span> */}
        <RiGithubFill
          style={{
            color: "black",
            marginTop: "2px",
            marginRight: "4px",
            width: "20px",
            height: "20px"
          }}
          className="share-svg"
        />
        <a
          href={`https://github.com/nonalcholic/nonalcholic`}
          target="_blank"
          rel="noreferrer"
        >
          <u>
            https://github.com/nonalcholic/nonalcholic
          </u>
        </a>
      </div>
      <div className="hint" style={{ marginTop: 20 }}>
        <span className="hint" style={{ marginBottom: 4 }}>
          🤍 도움 주신 분 🤍
        </span>
        <a
          href={`https://www.instagram.com/nupjuki`}
          target="_blank"
          rel="noreferrer"
        >
          <u>
            @nupjuki
          </u>
        </a>
        {/* @yo_o.ngy @sehoney.jang @na12.27mi @sunstheory
        <br />
        @uuuuuuk_traveller @526xionpark @shkeum21 */}
        경 세헌 남희 기영
        <br />
        상욱 시온 성호
      </div>
      <HomeButton />
    </>
  );
};

export default DeveloperPage;
