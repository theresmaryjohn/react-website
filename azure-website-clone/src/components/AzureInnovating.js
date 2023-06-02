import React, { useState, useEffect } from "react";
import "./AzureInnovating.css";

function AzureInnovating() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/theresmaryjohn/react-website/main/azure-website-clone/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.customersinnovating);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div>
         <div className="innovatingCards">
            <div className="azureInnovation">
              {data.map((item, index) => (
                <div className="customers" key={index}>
                  <div>
                    <img src={item.iconurl} alt="" />
                    <div className="azureCard">
                      <img src={item.imgurl} alt=""/>
                      <span>{item.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}
export default AzureInnovating;
