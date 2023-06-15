import React from "react";
import "./HeaderD.css";
import fliplite from "../assets/flipkart.png";
import angledown from "../assets/angledown.png";
import carticon from "../assets/cart.svg";
import searchicon from "../assets/searchicon-blue.svg";

function HeaderD() {
  return (
    <div className="headerdeskContainer">
      <div className="deskheader">
        <a className="deskimgflip">
          <img src={fliplite} />
        </a>
        <div className="searchproductsdesk">
          <div className="searchproducts">
            <input placeholder="Search for Products,Brands and More" />
          </div>
          <div className="searchiconimg">
            <img src={searchicon} />
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
        <div className="knowmore">
          <div className="moretext">More</div>
          <div className="moreimg">
            <img src={angledown} />
          </div>
        </div>
        <a className="carticon">
          <img src={carticon} />
          Cart
        </a>
      </div>
    </div>
  );
}

export default HeaderD;
