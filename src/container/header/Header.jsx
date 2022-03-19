import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="headermaincontainer">
      <div className="Projnamehead slide-top">
        <div className="SecItmside pcview">
          <p id="poclab">Occations⌄</p>
          <div className="ddropdown scale-up-top" id="xoccation"></div>
        </div>
        <p className="PriItmMid">ANISH PROJECT</p>
        <div className="SecItmside pcview">
          <p id="pcclab">Cakes⌄</p>
          <div className="ddropdown scale-up-top" id="xcakes"></div>
        </div>
      </div>
    </div>
  );
};
