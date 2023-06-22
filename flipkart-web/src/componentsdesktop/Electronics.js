import React, { useRef } from "react";
import airasiacard from "../assets/airasia.webp";
import arrow from "../assets/angle-right.svg";
import "./Electronics.css";

function Electronics({electronics: props}) {
  const image = useRef(null);
  const arrowRight = useRef(null);
  const arrowLeft = useRef(null);

  const handleClickLeft = () => {
    image.current.style.transform = `translateX(${2}%)`;
    arrowRight.current.style.display = "flex";
    arrowLeft.current.style.display = "none";
    image.current.style.transition = "transform ease-in-out 0.45s";
  };
  const handleClickRight = () => {
    image.current.style.transform = `translateX(${-130}%)`;
    arrowLeft.current.style.display = "flex";
    arrowRight.current.style.display = "flex";
    image.current.style.transition = "transform ease-in-out 0.45s";
  };

  return (
    <div className="main-container">
      <div className="electronics-container">
        <div className="best-of-electronics">
          <div className="electronics-text">
            <h2>Best of Electronics</h2>
            <a>VIEW ALL</a>
          </div>
        </div>
        <div className="prev-arrow" ref={arrowLeft} onClick={handleClickLeft}>
          <img src={arrow} />
        </div>
        <div className="scroll-img" ref={image}>
          {props.map((item, index) => (
            <div className="electronics" key={index}>
              <img src={item.imgurl} alt="image" />
              <div className="type">{item.text}</div>
              <div className="shop-now">{item.price}</div>
              <div className="brand">{item.para}</div>
            </div>
          ))}
        </div>
        <div className="next-arrow" ref={arrowRight} onClick={handleClickRight}>
          <img src={arrow} alt="Arrow"/>
        </div>
        <div className="airasia-img">
          <img src={airasiacard} alt="AirAsia" />
        </div>
      </div>
    </div>
  );
}

export default Electronics;
