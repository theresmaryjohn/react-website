import React, { useState, useEffect } from "react";
import button from '../assets/playbutton.png'
import "./Developer.css";

function Developer() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/theresmaryjohn/react-website/main/azure-website-clone/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.voiceassistant);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="developerStories">
      <div className="imgContainerdev">
        <img src={data.imageurlcofounder} />
      </div>
      <div className="devContainer">
        <div className="containerdev">
          <h2>{data.textabout}</h2>
          <div className="devKnowMore">
          <span><img src={button}/>{data.buttonwatch}</span>
          <a href="https://azure.microsoft.com/en-in/resources/developers/stories/">
            {data.buttonstories}
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Developer;
