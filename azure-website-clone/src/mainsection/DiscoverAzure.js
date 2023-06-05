import React, { useState, useEffect } from "react";
import "./DiscoverAzure.css";

function DiscoverAzure() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/theresmaryjohn/react-website/main/azure-website-clone/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.discover);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div className="discover">
        <h2>Discover what's happening on Azure</h2>
        <div className="discoverContainer" >
            {data.map((item,index)=>{
                <div className="discoverCards" key={index}>
                    <img src={item.imgurl}/>
                </div>
            })}
        </div>
    </div>
  )
}
export default DiscoverAzure;