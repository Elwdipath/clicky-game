import React from "react";
import "./card.css";
import images from "../../images.json";

function Card(props) {
  return (
    <img
      className="click-item shake"
      onClick={props.handleimageclick}
      key={images.id}
      src={process.env.PUBLIC_URL + "/images/" + images.fileName}
      alt="Slayeroak Character"
      id={images.id}
    />
  );
}

export default Card;
