import React, { useEffect, useState } from "react";
import fetchData from "../fetchData";
import angleright from '../assets/angle-right.svg'
import "./CarouselD.css";

function CarouselD() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [slide,setSlide]=useState(0)

  useEffect(() => {
    async function carouselData() {
      const carouselResponse = await fetchData();
      setData(carouselResponse.carouseldesktop);
    }
    carouselData();
  }, []);

  const CallIndex = () => {
    setIndex(index === data.length - 1 ? 0 : index + 1);
  };
  useEffect(() => {
    setTimeout(CallIndex, 2500);
  });

  return (
    <div className="slidecontainer">
      {data.map((item) => (
        <div
          className="slidecarousel"
          style={{
            transform: `translateX(${-100 * index}%)`,
            transition: "transform ease-out 0.45s",
          }}
          key={item}
        >
          <img src={item} />
        </div>
      ))}

       <div  className="nextimgone"><img src={angleright}/></div>
      <div className="nextimgtwo"><img src={angleright}/></div>
    </div>
  );
}

export default CarouselD;
