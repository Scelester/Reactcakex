import React from "react";
import "./Navbar.css";

import userlogicon from "../../assets/userlog.png";
import menubaricon from "../../assets/menubar.png";

// click to show search bar function
export const Navbar = () => {

  // menubar on mobile and pc view
  function sidebarviewertoggle() {
    if (window.innerWidth <= 900) {
      var whole_body = document.getElementsByTagName("body")[0]
      var mvs = document.getElementsByClassName("mobile-view-sidebar")[0]
      document.getElementsByClassName("menu-bar-for-mobile")[0].addEventListener('click',
        () => {
          whole_body.style.overflow = "hidden";
          mvs.style.display = "block"
        })

      document.getElementsByClassName("mvs-close")[0].addEventListener('click', () => {
        whole_body.style.overflow = "auto";
        document.getElementsByClassName("mobile-view-sidebar")[0].style.display = "none"
      })
    }
    window.addEventListener("click", function (event) {
      if (event.target === mvs) {
        mvs.style.display = "none"
        whole_body.style.overflow = "auto";
      }
    })
  }

  window.addEventListener('load', () => { sidebarviewertoggle(); })
  window.addEventListener('resize', () => { sidebarviewertoggle(); })




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

      <div className="mobile-view-sidebar ">

        <div className="actualsidebar">

          <div className="mvs-close">X</div>
          <div className="rgtbut loginbutton">
            <div className="logmenuonpc">
              <img src={userlogicon} alt="" width="18px"></img>
              <p>SignIn</p>
            </div>
          </div>

          <div className="tabview_ddown">
            <p id="">Cakes⌄</p>
            <div className="" id="xcakes"></div>
          </div>

          <div className="tabview_ddown">
            <p id="">Occations⌄</p>
            <div className="" id="xoccation"></div>
          </div>

        </div>


      </div>


    </div>
  );
};
