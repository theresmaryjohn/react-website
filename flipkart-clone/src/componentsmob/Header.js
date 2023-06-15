import React from "react";
import "./Header.css";
import hamburger from "../assets/burger.svg";
import fliplite from "../assets/flipkart.png";
import plusicon from "../assets/plus.svg";
import carticon from "../assets/cart.svg";
import searchicon from "../assets/search.webp";

function Header() {
  return (
    <div className="headerflip">
      <div className="headerflipfirst">
        <div className="mobheader">
          <span className="imghamburger">
            <img src={hamburger} />
          </span>
          <a className="imgflip">
            <img src={fliplite} />
          </a>
        </div>
        <div className="cartlogin">
          <a className="plusiconimg">
            <img src={plusicon} />
          </a>
          <a className="carticonimg">
            <img src={carticon} />
          </a>
          <span className="loginsec">Login</span>
        </div>
      </div>
      <div className="searchinput">
        <div>
          <img src={searchicon} />
        </div>
        <div className="searchpro">
          <input placeholder="Search for Products,Brands and More" />
        </div>
      </div>
    </div>
  );
}
export default Header;
