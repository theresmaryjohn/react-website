import React, { useEffect, useState } from "react";
import fetchData from "../fetchData";
import './Categories.css'

function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function categoriesData() {
      const catReponse = await fetchData();
      setData(catReponse.mobilehead);
    }
    categoriesData();
  }, []);

  console.log(data);

  return (
    <div className="imgIconsCat">
      {data.map((item, index) => (
        <div className="imgDivCat" key={index}>
          <img src={item} />
        </div>
      ))}
    </div>
  );
}

export default Categories;
