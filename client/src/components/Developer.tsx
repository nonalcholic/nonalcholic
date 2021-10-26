import "./Developer.scss";
import React, { useEffect, useState } from "react";
import { MBTIResultType } from "../redux/interfaces/progressInterface";
import { RiInstagramLine, RiMailLine } from "react-icons/ri";

interface Props {
  name: string;
  mbti: MBTIResultType;
  subdescription: string;
  description_1: string;
  description_2: string;
  description_3: string;
  image: any;
  instagram: string;
  email: string;
}
const Developer: React.FC<Props> = (props) => {
  const {
    name,
    mbti,
    description_1,
    description_2,
    description_3,
    image,
    instagram,
    email,
  } = props;

  return (
    <div className="developer">
      <div className="image-container">
        <img src={image} />
      </div>
      <div className="right-items">
        <div className="first">
          {name}
          {/* <span className="mbti">{mbti}</span> */}
          {/* <span className="email">{email}</span> */}
        </div>
        <div className="second">
          <div>🏫&nbsp;{description_1}</div>
          <div>🏢&nbsp;{description_2}</div>
          {/* <div>🧑‍💻&nbsp;{description_3}</div> */}
        </div>
        <div className="third">
          <a
            className="sns-button"
            href={`https://www.instagram.com/${instagram}/`}
            target="_blank"
          >
            <RiInstagramLine
              style={{ color: "white", width: "20px", height: "20px" }}
              className="share-svg"
            />
            인스타
          </a>
          <a className="sns-button" href={`mailto:${email}`} target="_blank">
            <RiMailLine
              style={{ color: "white", width: "20px", height: "20px" }}
              className="share-svg"
            />
            이메일
          </a>
        </div>
      </div>
    </div>
  );
};

export default Developer;
