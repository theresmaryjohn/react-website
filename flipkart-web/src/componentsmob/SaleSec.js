import React from "react";
import "./SaleSec.css";

function SaleSec(props) {
  return (
    <div className="sale-container" style={{ display: "flex" }}>
      {props.sale.map((item, index) => (
        <div key={index} className="sale-data">
          <img src={item} alt="Image" />
        </div>
      ))}
    </div>
  );
}

export default SaleSec;
