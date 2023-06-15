import React from "react";
import "./Categories.css";

function Categories(props) {

  return (
    <div className="imgIconsCat">
      {props.categories.map((item, index) => (
        <div className="imgDivCat" key={index}>
          <img src={item} />
        </div>
      ))}
    </div>
  );
}

export default Categories;
