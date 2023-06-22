import React from "react";
import "./SeasonSale.css";

function SeasonSale(props) {

  return (
    <div>
      <div className="sale-text">
        <div className="sale-head">End of Season Sale</div>
        <div className="sale-paragraph">Sponsered</div>
      </div>
      <div className="sale-image-container">
        {props.seasonSale.map((item, index) => (
          <div key={index} className="sale-image">
            <img src={item} alt="SaleImage" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeasonSale;
