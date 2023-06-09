import React, { useState, useEffect } from "react";
import fetchData from "../fetchData";
import salebanner from "../assets/lastday.webp";
import './LastDay.css'

function LastDay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function lastdayData() {
      const lastDayResponse = await fetchData();
      setData(lastDayResponse.lastdaysale);
    }
    lastdayData();
  }, []);

  return (
    <div className="lastDaySaleContainer">
      <img src={salebanner} style={{ width: "100%" }} />
      <div className="lastDaySaleData">
        {data.map((item, index) => (
          <div key={index} className="lastDaySale">
            <img src={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastDay;
