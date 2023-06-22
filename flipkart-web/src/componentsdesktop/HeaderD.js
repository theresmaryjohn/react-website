import React from "react";
import "./HeaderD.css";
import flipLite from "../assets/flipkart.png";
import angleDown from "../assets/angledown.png";
import cartIcon from "../assets/cart.svg";
import searchIcon from "../assets/searchicon-blue.svg";

function HeaderD() {
  return (
    <div className="header-desktop-container">
      <div className="desktop-header">
        <a className="desktop-img-flipkart">
          <img src={flipLite} alt="FlipkartLiteIcon"/>
        </a>
        <div className="search-products-desktop">
          <div className="search-products">
            <input placeholder="Search for Products,Brands and More" />
          </div>
          <div className="search-icon-img">
            <img src={searchIcon} alt="SearchIcon"/>
          </div>
        </div>
        <a
          href="https://www.flipkart.com/account/login?ret=/"
          className="login"
        >
          Login
        </a>
        <a
          className="seller"
          href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect"
        >
          <span>Become a Seller</span>
        </a>
        <div className="know-more">
          <div className="know-more-text">More</div>
          <div className="know-more-img">
            <img src={angleDown} alt="AngleDown"/>
          </div>
        </div>
        <a className="cart-icon">
          <img src={cartIcon} alt="CartIcon"/>
          Cart
        </a>
      </div>
    </div>
  );
}

export default HeaderD;
