import React, { useEffect, useState } from "react";
import fetchData from "../fetchData";
import './HomeandKitchen.css'

function HomeandKitchen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function homeData() {
      const homeResponse = await fetchData();
      setData(homeResponse.homeandkitchen);
    }
    homeData();
  }, []);
  return (
    <div className="homeContainer">
      <div className="bestofhome">
        <div className="hometext">
          <h2>Home & Kitchen Essentials</h2>
          <a>VIEW ALL</a>
        </div>
      </div>
      <div className="scrollImg">
        {data.map((item,index)=>(
            <div className="homeandkitchen" key={index}>
                <img src={item.imgurl}/>
                <div className="type">{item.text}</div>
                <div className="shopnow">{item.price}</div>
                <div className="brand">{item.para}</div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default HomeandKitchen;
