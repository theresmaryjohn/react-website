import React, { useState, useEffect } from "react";
import "./AzureCardImg.css";

function AzureCardImg() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/theresmaryjohn/react-website/main/azure-website-clone/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.datas);
      });
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className="mainCard-section">
      {/* <img className="card-img-text-lap" src={data.imgurldesktop} /> */}
      <div className="card-img-text">
        <img src={data.imgurlmobile} />
        <div className="mainCard">
          <h1 className="main-head">{data.headazure}</h1>
          <h1 className="main-head-two">{data.headAI}</h1>
          <p>{data.textstart}</p>
          <div className="buttons">
            <a className="getstarted">Get started</a>
            <a className="tryazure">Try Azure for free</a>
          </div>
        </div>
      </div>
      <div
        className="card-img-text-lap"
        style={{background: `url('${data.imgurldesktop}') 49% 0% / cover no-repeat` }}>
        <div className="mainCard">
          <h1 className="main-head">{data.headazure}</h1>
          <h1 className="main-head-two">{data.headAI}</h1>
          <p>{data.textstart}</p>
          <div className="buttons">
            <a className="getstarted">Get started</a>
            <a className="tryazure">Try Azure for free</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AzureCardImg;
