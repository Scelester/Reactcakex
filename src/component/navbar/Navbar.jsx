import React from "react";

import "./Navbar.css";

import searchicon from "../../assets/searchicon.png";
import userlogicon from "../../assets/userlog.png";

// click to show search bar function
export const Navbar = () => {
  const revealsearchbar = () => {
    var srbx = document.getElementById("srcbx");
    if (srbx.style.display === "none") {
      srbx.style.display = "initial";
      srbx.focus();
    } else {
      srbx.style.display = "none";
    }
  };

  // change search icon color to white when dark mode enabled
  window.addEventListener("load", function () {
    var curcol = getComputedStyle(document.documentElement).getPropertyValue(
      "--font-color"
    );
    if (curcol === "  #fffefe") {
      document.getElementById("searchicon").style.filter = "invert(1)";
    }
  });

  return (
    <div className="nav-main-container">
      <div className="nav-home-text">
        <a href="/">Home</a>
      </div>

      <div className="searchbox-container">
        <input type="search" name="searchnox" placeholder="Search" id="srcbx" />
        <img
          src={searchicon}
          alt=""
          onClick={revealsearchbar}
          id="searchicon"
        />
      </div>

      <div className="registration-btn-container">
        <a className="rgtbut" href="/">
          <img src={userlogicon} alt="" width="18px"></img>
          <p>login/SignUp</p>
        </a>
      </div>
    </div>
  );
};
