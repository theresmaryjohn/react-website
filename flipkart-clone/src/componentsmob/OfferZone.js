import React, { useState, useEffect } from "react";
import fetchData from "../fetchData";
import imgbanner from "../assets/graborgone.jpg";
import "./OfferZone.css";

function OfferZone() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function offerData() {
      const offerResponse = await fetchData();
      setData(offerResponse.graborgone);
    }
    offerData();
  }, []);
  return (
    <div className="mainOfferContainer">
        <div className="grab">
        <div className="grabtext">Grab or Gone</div>
        <div className="grabview">View all</div>
        </div>
      <img className="banner" src={imgbanner} />
      <div className="offerContainer">
        {data.map((item, index) => (
          <div key={index} className="offers">
            <img src={item.imgurl} />
            <div className="offertext">
              <div className="textp">{item.text}</div>
              <div className="textprice">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferZone;
