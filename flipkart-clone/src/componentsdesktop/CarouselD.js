import React, { useEffect, useState } from "react";
import angleright from "../assets/angle-right.svg";
import "./CarouselD.css";

function CarouselD({desktopCarousel:props}) {
  const [ind, setInd] = useState(0);

  const getIndex = () => {
    setInd((ind) => (ind === props.length - 1 ? 0 : ind + 1));
  };

  useEffect(() => {
    const interval = setInterval(getIndex, 2000);
    return () => clearInterval(interval);
  }, [props.length]);

  const handleClickNext = () => {
    setInd((ind) => (ind === props.length - 1 ? 0 : ind + 1));
  };

  const handleClickPrev = () => {
    setInd((ind) => (ind === 0 ? props.length - 1 : ind - 1));
  };

  return (
    <div className="slidecontainer">
      {props.map((item, index) => (
        <div
          className="slidecarousel"
          style={{
            transform: `translateX(${-100 * ind}%)`,
            transition: "transform ease-in-out 0.45s",
          }}
          key={index}
        >
          <img src={item} />
        </div>
      ))}

      <div className="nextimg" onClick={handleClickNext}>
        <img src={angleright} alt="Next" />
      </div>

      <div className="previmg" onClick={handleClickPrev}>
        <img src={angleright} alt="Previous" />
      </div>
    </div>
  );
}

export default CarouselD;
