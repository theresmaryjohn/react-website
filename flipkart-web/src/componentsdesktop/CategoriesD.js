import React from "react";
import "./CategoriesD.css";

function CategoriesD({category}) {
  return (
    <div className="category">
      <div className="categories-container">
        {category.map((item, index) => (
          <div key={index} className="categories">
            <img src={item.imgurl} alt="Image" />
            <a className="items">
              {item.text}
              <img src={item.svg} alt="Image" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesD;
