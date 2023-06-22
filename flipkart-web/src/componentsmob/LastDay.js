import React from "react";
import salebanner from "../assets/lastday.webp";
import "./LastDay.css";

function LastDay({lastDay:props}) {
  return (
    <div className="last-day-sale-container">
      <img src={salebanner} style={{ width: "100%" }} alt="SalesBanner"/>
      <div className="last-day-sale-data">
        {props.map((item, index) => (
          <div key={index} className="last-day-sale">
            <img src={item}  alt="Image"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastDay;
