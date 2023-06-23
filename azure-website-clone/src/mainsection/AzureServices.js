import React from "react";
import "./AzureServices.css";
import AzureProducts from "./AzureProducts";

function AzureServices({feature,
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
    <div className="azure-featured-head">
      <h2>
        Start putting your ideas into action with Azure products and services
      </h2>
      <AzureProducts
        feature={feature}
        machine={machine}
        compute={compute}
        container={container}
        hybrid={hybrid}
        internet={internet}
        show={show}
        handleClickFeature={handleClickFeature}
        handleClickMachine={handleClickMachine}
        handleClickCompute={handleClickCompute}
        handleClickContainer={handleClickContainer}
        handleClickHybrid={handleClickHybrid}
        handleClickInternet={handleClickInternet}/>
      <a className="see-all" href="https://azure.microsoft.com/en-in/products/">
        See all products (200+)
      </a>
    </div>
  );
}
export default AzureServices;
