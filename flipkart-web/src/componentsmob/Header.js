import React from "react";
import "./Header.css";
import hamburger from "../assets/burger.svg";
import fliplite from "../assets/flipkart.png";
import plusicon from "../assets/plus.svg";
import carticon from "../assets/cart.svg";
import searchicon from "../assets/search.webp";

function Header() {
  return (
    <div className="header-flipkart">
      <div className="header-flipkart-first">
        <div className="mobile-header">
          <span className="image-hamburger">
            <img src={hamburger} alt="Hamburger"/>
          </span>
          <a className="image-flipkart">
            <img src={fliplite} alt="FlipLite"/>
          </a>
        </div>
        <div className="cart-login">
          <a className="plus-icon-image">
            <img src={plusicon} alt="PlusIcon"/>
          </a>
          <a className="cart-icon-image">
            <img src={carticon} alt="CartIcon"/>
          </a>
          <span className="login-section">Login</span>
        </div>
      </div>
      <div className="search-input">
        <div>
          <img src={searchicon} alt="SearchIcon" />
        </div>
        <div className="search-products">
          <input placeholder="Search for Products,Brands and More" />
        </div>
      </div>
    </div>
  );
}
export default Header;
