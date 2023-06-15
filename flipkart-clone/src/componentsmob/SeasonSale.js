import React, { useState, useEffect } from "react";
import fetchData from "../fetchData";
import "./SeasonSale.css";

function SeasonSale(props) {

  return (
    <div>
      <div className="saletext">
        <div className="salehead">End of Season Sale</div>
        <div className="salep">Sponsered</div>
      </div>
      <div className="saleimgContainer">
        {props.seasonSale.map((item, index) => (
          <div key={index} className="saleimg">
            <img src={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeasonSale;
