import React from "react";
import "./AzureInnovating.css";

function AzureInnovating({icon, filteredData, handleClick}) {
  return (
    <div>
      <div className="innovation-head">
        Find out how these customers are innovating with Azure
      </div>
      <div className="azure-innovation">
        {icon?.map((item, id) => (
          <div className="customers" key={id}>
            <div onClick={() => handleClick(item.id)}>
              <img src={item.iconurl} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="innovating-cards">
        {filteredData?.map((item, id) => (
          <div className="azure-customers" key={id}>
            <img src={item.imgurl} alt="" />
            <div className="text-area">
              <span>{item.text}</span>
              <a className="case-study">{item.caseurl}</a>
              <a className="work">{item.customerswork}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AzureInnovating;
