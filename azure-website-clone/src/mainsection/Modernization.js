import React, { useState, useEffect } from "react";
import "./Modernization.css";

function Modernization() {
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
    <div className="containerModernization">
    <div className="modernization">
        <div className="imgmodernization">
            <img src={data.imgurl}/>
        </div>
        <div className="textButton">
            <h2>{data.text}</h2>
           <span> <a href="https://azure.microsoft.com/en-in/solutions/migration/">{data.buttontext}</a></span>
        </div>

    </div>
    </div>
  )
}
export default Modernization;