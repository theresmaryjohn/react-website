import React, { useState, useEffect } from "react";
import fetchData from "../fetchData";
import "./BestSelling.css";

function BestSelling({selling:props}) {

  return (
    <div
      className="bestSelling"
      style={{ display: "flex", flexDirection: "row" }}
    >
      {props.map((item, index) => (
        <div key={index} className="sellingContainer">
          <img src={item} />
        </div>
      ))}
    </div>
  );
}

export default BestSelling;
