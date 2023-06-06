import React, { useState, useEffect } from "react";
import "./AzureBuild.css";

function AzureBuild() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/theresmaryjohn/react-website/main/azure-website-clone/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.contentcards);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="azureBuild">
      {data.map((item, index) => (
        <div className="buildContainer" key={index}>
          <img src={item.imgurl} />
          <div className="buildText">
            <span>{item.heading}</span>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default AzureBuild;
