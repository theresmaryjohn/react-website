import React from "react";
import "./SaleSec.css";

function SaleSec(props) {
  return (
    <div className="saleContainer" style={{ display: "flex" }}>
      {props.sale.map((item, index) => (
        <div key={index} className="saledata">
          <img src={item} />
        </div>
      ))}
    </div>
  );
}

export default SaleSec;
