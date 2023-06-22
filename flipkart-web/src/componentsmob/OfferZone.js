import React from "react";
import imgbanner from "../assets/graborgone.jpg";
import "./OfferZone.css";

function OfferZone(props) {

  return (
    <div className="main-offer-container">
      <div className="grab-items">
        <div className="grab-items-text">Grab or Gone</div>
        <div className="grab-items-view">View all</div>
      </div>
      <img className="banner" src={imgbanner} alt="ImageBanner" />
      <div className="offer-container">
        {props.offer.map((item, index) => (
          <div key={index} className="offers">
            <img src={item.imgurl} alt="Image" />
            <div className="offer-text">
              <div className="paragraph">{item.text}</div>
              <div className="text-price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferZone;
