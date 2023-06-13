import React, { useState, useEffect, useRef } from "react";
import fetchData from "../fetchData";
import airasiacard from "../assets/airasia.webp";
import arrow from "../assets/angle-right.svg";
import "./Electronics.css";

function Electronics() {
  const [data, setData] = useState([]);
  const image = useRef(null);
  const arrowRight = useRef(null);
  const arrowLeft = useRef(null);

  useEffect(() => {
    async function electronicsData() {
      const electronicsResponse = await fetchData();
      setData(electronicsResponse.electronicsdata);
    }
    electronicsData();
  }, []);
  const handleClickLeft = () => {
    image.current.style.transform = `translateX(${2}%)`;
    arrowRight.current.style.display = "flex";
    arrowLeft.current.style.display = "none";
    image.current.style.transition="transform ease-in-out 0.45s"
  };
  const handleClickRight = () => {
    image.current.style.transform = `translateX(${-145}%)`;
    arrowLeft.current.style.display = "flex";
    arrowRight.current.style.display = "flex";
    image.current.style.transition="transform ease-in-out 0.45s"
  };

  return (
    <div className="mainContainer">
      <div className="elecContainer">
        <div className="bestofelec">
          <div className="electext">
            <h2>Best of Electronics</h2>
            <a>VIEW ALL</a>
          </div>
        </div>
        <div className="prevarrow" ref={arrowLeft} onClick={handleClickLeft} >
          <img src={arrow} />
        </div>
        <div className="scrollImg" ref={image}>
          {data.map((item, index) => (
            <div className="electronics" key={index}>
              <img src={item.imgurl} />
              <div className="type">{item.text}</div>
              <div className="shopnow">{item.price}</div>
              <div className="brand">{item.para}</div>
            </div>
          ))}
        </div>
        <div className="nextarrow" ref={arrowRight} onClick={handleClickRight}>
          <img src={arrow}  />
        </div>
        <div className="airasiaimg">
          <img src={airasiacard} />
        </div>
      </div>
    </div>
  );
}

export default Electronics;
