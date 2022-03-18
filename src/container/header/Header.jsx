import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="headermaincontainer">
      <div className="Projnamehead slide-top">
        <div className="SecItmside pcview">
          <p id="poclab">Occations⌄</p>
          <div className="ddropdown scale-up-top" id="xoccation">
            <span className="dditemcol1">
              <p>item number one</p>
              <p>item number two</p>
              <p>item number three</p>
            </span>
            <span className="dditemcol2">
              <p>item number four</p>
              <p>item number five</p>
              <p>item number six</p>
            </span>
          </div>
        </div>
        <p className="PriItmMid">ANISH PROJECT</p>
        <div className="SecItmside pcview">
          <p id="pcclab">Cakes⌄</p>
          <div className="ddropdown scale-up-top" id="xcakes">
            <span className="dditemcol1">
              <p>item number one</p>
              <p>item number two</p>
              <p>item number three</p>
            </span>
            <span className="dditemcol2">
              <p>item number four</p>
              <p>item number five</p>
              <p>item number six</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
