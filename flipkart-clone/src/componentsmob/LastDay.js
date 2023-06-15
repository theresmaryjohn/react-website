import React from "react";
import salebanner from "../assets/lastday.webp";
import "./LastDay.css";

function LastDay({lastDay:props}) {
  return (
    <div className="lastDaySaleContainer">
      <img src={salebanner} style={{ width: "100%" }} />
      <div className="lastDaySaleData">
        {props.map((item, index) => (
          <div key={index} className="lastDaySale">
            <img src={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastDay;
