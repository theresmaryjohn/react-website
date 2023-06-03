import React, { useState, useEffect } from "react";
import "./AzureInnovating.css";

function AzureInnovating() {
  const [icon, setIcon] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/theresmaryjohn/react-website/main/azure-website-clone/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilteredData([data.customersinnovating[0]]);
        setIcon(data.customersinnovatingicons);
        setData(data.customersinnovating);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleClick(id) {
    let filtered = data.filter((item) => item.id === id);
    setFilteredData(filtered);
  }

  return (
    <div>
      <div className="innovationHead">
        Find out how these customers are innovating with Azure
      </div>
      <div className="azureInnovation">
        {icon?.map((item, id) => (
          <div className="customers" key={id}>
            <div onClick={() => handleClick(item.id)}>
              <img src={item.iconurl} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="innovatingCards">
        {filteredData?.map((item, id) => (
          <div className="azureCustomers" key={id}>
            <img src={item.imgurl} alt="" />
            <div className="textArea">
              <span>{item.text}</span>
              <a className="caseStudy">{item.caseurl}</a>
              <a className="work">{item.customerswork}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AzureInnovating;
