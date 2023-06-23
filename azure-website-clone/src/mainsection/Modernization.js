import React from "react";
import "./Modernization.css";

function Modernization({accelerate}) {
  return(
    <div className="container-modernization">
    <div className="modernization">
        <div className="img-modernization">
            <img src={accelerate.imgurl}/>
        </div>
        <div className="text-button">
            <h2>{accelerate.text}</h2>
           <span> <a href="https://azure.microsoft.com/en-in/solutions/migration/">{accelerate.buttontext}</a></span>
        </div>

    </div>
    </div>
  )
}
export default Modernization;