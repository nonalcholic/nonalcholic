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
  image: any;
  instagram: string;
  email: string;
}
const Developer: React.FC<Props> = (props) => {
  const { name, mbti, description_1, description_2, image, instagram, email } =
    props;

  const onEmailClick = (email: string) => {
    navigator.clipboard.writeText(email);
  };

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
          <div>🧑‍💻&nbsp;{description_2}</div>
        </div>
        <div className="third">
          <div>
            <a href={`https://www.instagram.com/${instagram}/`} target="_blank">
              <RiInstagramLine
                style={{ color: "black", width: "20px", height: "20px" }}
                className="share-svg"
              />
            </a>
          </div>
          <div onClick={() => onEmailClick(email)}>
            <RiMailLine
              style={{ color: "black", width: "20px", height: "20px" }}
              className="share-svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
