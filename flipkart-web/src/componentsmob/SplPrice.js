import React from "react";
import "./SplPrice.css";


function SplPrice({price:propsA}) {

  return (
    <div className="special-price-container">
      <div style={{ display: "flex" }}>
        {propsA.map((item, index) => (
          <div key={index} className="special-price-data">
            <img src={item} alt="Image"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SplPrice;
