import React from "react";
import hamburger from "../assets/hamburger.svg";
import microsoftlogo from "../assets/microsoft-icon.svg";
import searchicon from "../assets/search-line-icon.png";
import dot from "../assets/dots.svg";
import "./Header.css";
import List from "./List";
import "./List.css";
import Listitem from "./Listitem";

function Header() {
  return (
    <div className="header-component">
      <div className="app-header-mobile">
        <div className="header-left">
          <span className="hamburger">
            <img src={hamburger}></img>
          </span>
          <span className="header-title">Azure</span>
        </div>

        <span className="microsoft-icon">
          <img src={microsoftlogo}></img>
        </span>

        <div className="header-right">
          <span className="search">
            <img src={searchicon}></img>
          </span>
          <span className="sign-in">Sign In</span>
        </div>
      </div>
      <div className="app-header-tab">
        <div className="tab-left">
          <span className="microsoft">
            <img src={microsoftlogo}></img>
          </span>
          <span className="title">Azure</span>
          <List />
        </div>
        <div className="tab-right">
          <span className="search">
            <img src={searchicon}></img>
          </span>
          <span className="dots">
            <img src={dot}></img>
          </span>
          <span className="sign-in">Sign In</span>
        </div>
        <div className="lap-right">
          <input className="search-item" type="text" placeholder="Search" />
          <img className="search-icon" src={searchicon}></img>
          <Listitem />
        </div>
      </div>
    </div>
  );
}
export default Header;
