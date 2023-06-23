import React from "react";
import "./DiscoverAzure.css";

function DiscoverAzure({discover}) {

  return(
    <div className="discover">
        <h2>Discover what's happening on Azure</h2>
        <div className="discover-container" >
            {discover.map((item,index)=>(
                <div className="discover-cards" key={index}>
                    <img src={item.imgurl}/>
                    <div className="texts-container">
                    <h3>{item.heading}</h3>
                    <p>{item.text}</p>
                    <a href="https://azure.microsoft.com/en-in/solutions/ai/">{item.buttontext}</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
export default DiscoverAzure;