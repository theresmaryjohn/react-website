import React, { useState, useEffect } from "react";
import "./Mordernization.css";

function Mordernization() {
  const [data, setData] = useState([]);


  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/theresmaryjohn/react-website/main/azure-website-clone/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.accelerate);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div className="modernization">
        <div className="imgmordernization">
            <img src={data.imgurl}/>
        </div>
        <div className="textButton">
            <h2>{data.text}</h2>
            <a href="https://azure.microsoft.com/en-in/solutions/migration/">{data.buttontext}</a>
        </div>

    </div>
  )
}
export default Mordernization;