import React, { useState, useEffect } from "react";
import fetchData from "../fetchData";
import './SeasonSale.css'

function SeasonSale() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function seasonSaleData() {
      const seasonSaleResponse = await fetchData();
      setData(seasonSaleResponse.endofseasonsale);
    }
    seasonSaleData();
  }, []);
  return (
    <div>
      <div className="saletext" >
        <div className="salehead">End of Season Sale</div>
        <div className="salep">Sponsered</div>
      </div>
      <div className="saleimgContainer">
        {data.map((item, index) => (
          <div key={index} className="saleimg">
            <img src={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeasonSale;
