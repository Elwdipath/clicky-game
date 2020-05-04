import React from "react";
import "./main.css";
import images from "../../images.json";

function Main(props) {
  return (
    <div className="container">
      <div className="row mx-auto">
        {images.map((image) => (
          <img
            className="click-item shake"
            onClick={props.handleCardClick}
            key={image.id}
            src={process.env.PUBLIC_URL + image.image}
            alt="Guitarist"
            id={image.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
