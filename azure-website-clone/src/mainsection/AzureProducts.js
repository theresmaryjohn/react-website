import React from "react";
import "./AzureProducts.css";

function AzureProducts({feature,
  machine,
  compute,
  container,
  hybrid,
  internet,
  show,
  handleClickFeature,
  handleClickMachine,
  handleClickCompute,
  handleClickContainer,
  handleClickHybrid,
  handleClickInternet}) {
  return (
    <div className="container">
      <div className="product-head">
        <div className="scroll-bar">
          <a onClick={handleClickFeature}>Feature</a>
          <a onClick={handleClickMachine}> Al + machine learning</a>
          <a onClick={handleClickCompute}>Compute</a>
          <a onClick={handleClickContainer}>Containers</a>
          <a onClick={handleClickHybrid}>Hybrid + multicloud</a>
          <a onClick={handleClickInternet}>Internet of Things (IoT)</a>
        </div>
        <div className="img-cards">
          {show === "feature" && (
            <div className="azure-featured">
              {feature.map((item, index) => (
                <div className="azure-card" key={index}>
                  <div>
                    <img src={item.imgurl} alt="" />
                    <div className="azure-text">
                      <p>{item.text}</p>
                      <span>{item.heading}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="img-cards">
          {show === "machine" && (
            <div className="azure-featured">
              {machine.map((item, index) => (
                <div className="azure-card" key={index}>
                  <div>
                    <img src={item.imgurl} alt="" />
                    <div className="azure-text">
                      <p>{item.text}</p>
                      <span>{item.heading}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="img-cards">
          {show === "compute" && (
            <div className="azure-featured">
              {compute.map((item, index) => (
                <div className="azure-card" key={index}>
                  <div>
                    <img src={item.imgurl} alt="" />
                    <div className="azure-text">
                      <p>{item.text}</p>
                      <span>{item.heading}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="img-cards">
          {show === "container" && (
            <div className="azure-featured">
              {container.map((item, index) => (
                <div className="azure-card" key={index}>
                  <div>
                    <img src={item.imgurl} alt="" />
                    <div className="azure-text">
                      <p>{item.text}</p>
                      <span>{item.heading}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="img-cards">
          {show === "hybrid" && (
            <div className="azure-featured">
              {hybrid.map((item, index) => (
                <div className="azure-card" key={index}>
                  <div>
                    <img src={item.imgurl} alt="" />
                    <div className="azure-text">
                      <p>{item.text}</p>
                      <span>{item.heading}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="img-cards">
          {show === "internet" && (
            <div className="azure-featured">
              {internet.map((item, index) => (
                <div className="azure-card" key={index}>
                  <div>
                    <img src={item.imgurl} alt="" />
                    <div className="azure-text">
                      <p>{item.text}</p>
                      <span>{item.heading}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default AzureProducts;
