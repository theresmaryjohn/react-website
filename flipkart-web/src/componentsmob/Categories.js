import React from "react";
import "./Categories.css";

function Categories(props) {

  return (
    <div className="img-icons-categories">
      {props.categories.map((item) => (
        <div className="img-division-categories">
          <img src={item} alt="CategoriesImages" />
        </div>
      ))}
    </div>
  );
}

export default Categories;
