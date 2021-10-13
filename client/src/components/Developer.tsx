import "./Developer.scss";
import React, { useEffect, useState } from "react";
import { MBTIResultType } from "../redux/interfaces/progressInterface";

interface Props {
  name: string;
  mbti: MBTIResultType;
  description: string;
  image: any;
  instagram: string;
  email: string;
}
const Developer: React.FC<Props> = (props) => {
  const { name, mbti, description, image, instagram, email } = props;

  return (
    <div className="developer">
      <img src={image} />
      <div className="right-items">
        <div className="first">
          {name}
          <span className="mbti">{mbti}</span>
          <span className="insta">{instagram}</span>
        </div>
        <div className="second">{description}</div>
        <div className="third">{email}</div>
      </div>
    </div>
  );
};

export default Developer;
