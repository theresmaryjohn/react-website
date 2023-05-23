import React from "react";
import angledown from "../assets/angle-down.png";
import './List.css'


let arr = [
  { title: "Explore",img:angledown},
  { title: "Products" ,img:angledown},
  { title: "Solutions",img:angledown },
  { title: "Pricing" ,img:angledown},
  { title: "Partners" ,img:angledown},
  { title: "Recources" ,img:angledown},
];

function List() {
  return (
    <div className="app-list">
      {arr.map((obj) => {
        console.log(obj.title)
        return <div className="list-item" key={obj.title}>{obj.title} <img src={obj.img}/></div>;
      })}
    </div>
  );
}

export default List;
