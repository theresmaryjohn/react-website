import React from "react";
import "./AzureBuild.css";

function AzureBuild({build}) {

  return (
    <div className="azure-build">
      {build.map((item, index) => (
        <div className="build-container" key={index}>
          <img src={item.imgurl} />
          <div className="build-text">
            <span>{item.heading}</span>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default AzureBuild;
