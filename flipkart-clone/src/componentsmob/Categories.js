import React from "react";
import "./Categories.css";

function Categories(props) {

  return (
    <div className="imgIconsCat">
      {props.categories.map((item) => (
        <div className="imgDivCat">
          <img src={item} />
        </div>
      ))}
    </div>
  );
}

export default Categories;
