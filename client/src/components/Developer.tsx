import "./Developer.scss";
import React, { useEffect, useState } from "react";
import { MBTIResultType } from "../redux/interfaces/progressInterface";

interface Props {
  name: string;
  mbti: MBTIResultType;
  description: string;
  image: any;
}
const Developer: React.FC<Props> = (props) => {
  const { name, mbti, description, image } = props;

  return (
    <div className="developer">
      <img src={image} />
      <div className="right-items">
        <span className="name">
          {name}
          <span className="mbti">{mbti}</span>
        </span>
        <span className="desc">{description}</span>
      </div>
    </div>
  );
};

export default Developer;
