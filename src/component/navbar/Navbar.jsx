import React from "react";
import "./Navbar.css";

import userlogicon from "../../assets/userlog.png";
import menubaricon from "../../assets/menubar.png";

// click to show search bar function
export const Navbar = () => {

  // menubar on mobile and pc view

  return (
    <div className="nav-main-container">
      <div className="nav-home-text">
        <a href="/">Home</a>
      </div>

      <div className="searchbox-container">
        <input type="search"
          name="searchnox"
          placeholder="Search"
          id="srcbx"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (e.target.value) {
                window.location.href = "/?search=" + e.target.value
              } else {
                if (window.location.pathname === "/") {
                  window.location.href = "/"
                }
              }
            }
          }}
        />
      </div>

      <div className="registration-btn-container">
        <div className="rgtbut pcview loginbutton">
          <div className="logmenuonpc">
            <img src={userlogicon} alt="" width="18px"></img>
            <p>SignIn</p>
          </div>
        </div>

        <div className="menu-bar-for-mobile tabview">
          <img src={menubaricon} alt="" width="25px" />
        </div>
      </div>
    </div>
  );
};
