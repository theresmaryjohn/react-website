import React, { useState, useEffect } from "react";
import fetchData from "../fetchData";
import airasiacard from "../assets/airasia.webp";
import "./Electronics.css";

function Electronics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function electronicsData() {
      const electronicsResponse = await fetchData();
      setData(electronicsResponse.electronicsdata);
    }
    electronicsData();
  }, []);
  return (
    <div className="elecContainer">
      <div className="bestofelec">
        <div className="electext">
          <h2>Best of Electronics</h2>
          <a>VIEW ALL</a>
        </div>
      </div>
      <div className="scrollImg">
      {data.map((item, index) => (
        <div className="electronics" key={index}>
          <img src={item.imgurl} />
          <div className="type">{item.text}</div>
          <div className="shopnow">{item.price}</div>
          <div className="brand">{item.para}</div>
        </div>
      ))}
      </div>
      <div className="airasiaimg">
        <img src={airasiacard} />
      </div>
    </div>
  );
}

export default Electronics;
