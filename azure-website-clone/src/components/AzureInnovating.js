import React, { useState, useEffect } from "react";
import "./AzureInnovating.css";

function AzureInnovating() {
  const [icon, setIcon] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/theresmaryjohn/react-website/main/azure-website-clone/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIcon(data.customersinnovatingicons);
        setData(data.customersinnovating);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
//   function handleClick() {}

  return (
    <div>
        <div className="innovationHead">
            Find out how these customers are innovating with Azure
        </div>
      <div className="azureInnovation">
        {icon.map((item, id) => (
          <div className="customers" key={id}>
            <div>
              <img src={item.iconurl} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="innovatingCards">
        {data.map((item, id) => (
          <div className="azureCard" key={id}>
            <img src={item.imgurl} alt="" />
            <span>{item.text}</span>
            <a className="caseStudy">{item.caseurl}</a>
            <a className="work">{item.customerswork}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AzureInnovating;
