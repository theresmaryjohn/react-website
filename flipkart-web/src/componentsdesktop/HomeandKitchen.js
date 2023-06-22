import React, {useRef} from "react";
import arrow from "../assets/angle-right.svg";
import "./HomeandKitchen.css";

function HomeandKitchen({home:props}) {
  const image = useRef(null);
  const arrowLeft = useRef(null);
  const arrowRight = useRef(null);

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
    <div className="home-container">
      <div className="best-of-homecontainer">
        <div className="homecontainer-text">
          <h2>Home & Kitchen Essentials</h2>
          <a>VIEW ALL</a>
        </div>
      </div>
      <div className="prev-arrow-homecontainer" ref={arrowLeft} onClick={handleClickLeft}>
        <img src={arrow} alt="Arrow" />
      </div>
      <div className="scroll-img-homecontainer" ref={image}>
        {props.map((item, index) => (
          <div className="home-and-kitchen" key={index}>
            <img src={item.imgurl} />
            <div className="type">{item.text}</div>
            <div className="shop-now">{item.price}</div>
            <div className="brand">{item.para}</div>
          </div>
        ))}
      </div>
      <div
        className="next-arrow-homecontainer"
        ref={arrowRight}
        onClick={handleClickRight}
      >
        <img src={arrow} alt="Arrow" />
      </div>
    </div>
  );
}

export default HomeandKitchen;
