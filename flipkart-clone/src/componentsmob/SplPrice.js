import React from "react";
import "./SplPrice.css";


function SplPrice({price:propsA,data:propsB}) {

  return (
    <div className="splPriceContainer">
      <div style={{ display: "flex" }}>
        {propsA.map((item, index) => (
          <div key={index} className="splPricedataone">
            <img src={item} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        {propsB.map((item, index) => (
          <div key={index} className="splPricedatatwo">
            <img src={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SplPrice;
