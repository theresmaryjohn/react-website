import React, { useEffect, useRef, useState } from "react";
import fetchData from "../fetchData";
import "./Carousel.css";

function Carousel() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function categoriesData() {
      const catReponse = await fetchData();
      setData(catReponse.carousel);
    }
    categoriesData();
  }, []);

  const CallIndex = () => {
    setIndex(index === data.length - 1 ? 0 : index + 1);
  };
  useEffect(() => {
    setTimeout(CallIndex,2500);
  });

  return (
    <div className="slide">
      {data?.map((item) => (
        <div
        className="imgCarousel"
          key={item}
          style={{
            transform: `translateX(${-100 * index}%)`,
            transition: "transform ease-out 0.45s",
          }}
        >
          <img src={item} />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
