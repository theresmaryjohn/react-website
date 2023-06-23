import React from "react";
import button from '../assets/playbutton.png'
import "./Developer.css";

function Developer({developer}) {

  return (
    <div className="developer-stories">
      <div className="img-container-developer">
        <img src={developer.imageurlcofounder} alt="" />
      </div>
      <div className="developer-container">
        <div className="container-developer">
          <h2>{developer.textabout}</h2>
          <div className="developer-know-more">
          <span><img src={button} alt=""/>{developer.buttonwatch}</span>
          <a href="https://azure.microsoft.com/en-in/resources/developers/stories/">
            {developer.buttonstories}
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Developer;
