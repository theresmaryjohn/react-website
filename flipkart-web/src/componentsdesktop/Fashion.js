import React, { useRef } from "react";
import arrow from "../assets/angle-right.svg";
import "./Fashion.css";

function Fashion({fashion:props}) {
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
    image.current.style.transform = `translateX(${-65}%)`;
    arrowLeft.current.style.display = "flex";
    arrowRight.current.style.display = "flex";
    image.current.style.transition = "transform ease-in-out 0.45s";
  };
  return (
    <div className="fashionContainer">
      <div className="bestoffashion">
        <div className="fashiontext">
          <h2>Fashion Top Deals</h2>
          <a>VIEW ALL</a>
        </div>
      </div>
      <div
        className="prevarrowfashion"
        ref={arrowLeft}
        onClick={handleClickLeft}
      >
        <img src={arrow} />
      </div>
      <div className="scrollImgFashion" ref={image}>
        {props.map((item, index) => (
          <div className="fashiondeal" key={index}>
            <img src={item.imgurl} />
            <div className="type">{item.text}</div>
            <div className="shopnow">{item.price}</div>
            <div className="brand">{item.para}</div>
          </div>
        ))}
      </div>
      <div
        className="nextarrowfashion"
        ref={arrowRight}
        onClick={handleClickRight}
      >
        <img src={arrow} />
      </div>
    </div>
  );
}

export default Fashion;
