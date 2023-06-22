import React from "react";
import "./BestSelling.css";

function BestSelling({selling:props}) {

  return (
    <div
      className="best-selling"
      style={{ display: "flex", flexDirection: "row" }}
    >
      {props.map((item, index) => (
        <div key={index} className="selling-container">
          <img src={item} alt="Image"/>
        </div>
      ))}
    </div>
  );
}

export default BestSelling;
