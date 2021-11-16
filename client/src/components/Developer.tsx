import "./Developer.scss";
import React, { useEffect, useState } from "react";
import { RiInstagramLine, RiMailLine } from "react-icons/ri";

interface Props {
  name: string;
  subdescription: string;
  description_1: string;
  description_2: string;
  image: any;
  instagram: string;
  email: string;
}
const Developer: React.FC<Props> = (props) => {
  const { name, description_1, description_2, image, instagram, email } = props;

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <div className={`developer ${show}`}>
      <div className="image-container">
        <img src={image} alt="developer" />
      </div>
      <div className="right-items">
        <div className="first">{name}</div>
        <div className="second">
          <div>🏫&nbsp;{description_1}</div>
          <div>🏢&nbsp;{description_2}</div>
        </div>
        <div className="third">
          <a
            className="sns-button"
            href={`https://www.instagram.com/${instagram}/`}
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramLine
              style={{ color: "white", width: "20px", height: "20px" }}
              className="share-svg"
            />
            인스타
          </a>
          <a
            className="sns-button"
            href={`mailto:${email}`}
            target="_blank"
            rel="noreferrer"
          >
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
