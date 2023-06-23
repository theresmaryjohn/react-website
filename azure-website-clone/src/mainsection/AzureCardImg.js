import React from "react";
import "./AzureCardImg.css";

function AzureCardImg({card}) {
  return (
    <div className="main-card-section">
      <div className="card-img-text">
        <img src={card.imgurlmobile} alt="Cards" />
        <div className="main-card">
          <h1 className="main-head">{card.headazure}</h1>
          <h1 className="main-head-two">{card.headAI}</h1>
          <p>{card.textstart}</p>
          <div className="buttons">
            <a className="get-started">Get started</a>
            <a className="try-azure">Try Azure for free</a>
          </div>
        </div>
      </div>
      <div
        className="card-img-text-lap"
        style={{
          background: `url('${card.imgurldesktop}') 49% 0% / cover no-repeat`,
        }}
      >
        <div className="main-card">
          <h1 className="main-head">{card.headazure}</h1>
          <h1 className="main-head-two">{card.headAI}</h1>
          <p>{card.textstart}</p>
          <div className="buttons">
            <a className="get-started">Get started</a>
            <a className="try-azure">Try Azure for free</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AzureCardImg;
