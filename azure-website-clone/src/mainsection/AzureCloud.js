import React from "react";
import "./AzureCloud.css";

function AzureCloud({cloud}) {
  return (
    <div className="cloud-section">
      <h2 className="cloud-header">
        On-premises, hybrid, multicloud, or at the edge—create secure,
        future-ready cloud solutions on Azure
      </h2>
      <div className="cloud-cards">
        {cloud.map((item, index) => (
          <tr key={index}>
            <img src={item.imgurl} alt="ImageCards" />
            <div className="cloud-text">
              <span>{item.heading}</span>
              <p>{item.text}</p>
            </div>
          </tr>
        ))}
      </div>
      <div className="cloud-buttons">
        <p>
          {" "}
          New to Azure?&nbsp;
          <a href="https://azure.microsoft.com/en-in/explore/">
            Get an overview
          </a>
        </p>
      </div>
    </div>
  );
}
export default AzureCloud;
