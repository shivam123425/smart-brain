import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, boxes }) => {
  const content = boxes.map((box, i) => (
    <div
      className="bounding-box"
      key={i}
      style={{
        top: box.topRow,
        right: box.rightCol,
        bottom: box.bottomRow,
        left: box.leftCol
      }}
    />
  ));
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        {content}
      </div>
    </div>
  );
};

export default FaceRecognition;
