import React, { useState, useEffect } from "react";
import "./AzureCloud.css";

function AzureCloud() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/theresmaryjohn/react-website/main/azure-website-clone/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.futureready);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cloudSection">
      <h2 className="cloudHeader">
        On-premises, hybrid, multicloud, or at the edge—create secure,
        future-ready cloud solutions on Azure
      </h2>
      <div className="cloudCards">
        {data.map((item, index) =>(
          <tr key={index}>
            <img src={item.imgurl} alt=""/>
            <div className="cloudText">
            <span>{item.heading}</span>
            <p>{item.text}</p>
            </div>
          </tr>
        ))}
      </div>
      <div className="cloudButtons">
        <p> New to Azure?&nbsp;
           <a href="https://azure.microsoft.com/en-in/explore/">Get an overview</a>
        </p>
      </div>
    </div>
  );
}
export default AzureCloud;
