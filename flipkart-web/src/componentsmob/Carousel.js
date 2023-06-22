import React, { useEffect,useState } from "react";
import "./Carousel.css";

function Carousel(props) {
  const [index, setIndex] = useState(0);

  const CallIndex = () => {
    setIndex(index === props.carousel.length - 1 ? 0 : index + 1);
  };
  useEffect(() => {
    setTimeout(CallIndex, 2500);
  });

  return (
    <div className="slide">
      {props.carousel?.map((item) => (
        <div
          className="img-carousel"
          key={item}
          style={{
            transform: `translateX(${-100 * index}%)`,
            transition: "transform ease-out 0.45s",
          }}
        >
          <img src={item} alt="Image"/>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
