import React from "react";
import "./Header.css";

export const Header = () => {
  var dd1_toggelstate = false;
  var dd2_togglestate = false;

  // function that makes dropdown shown on click (toggle)
  function dropdown_inititalizer() {
    let drop_lable_1 = document.getElementById("poclab");
    let drop_lable_2 = document.getElementById("pcclab");
    let drop_item_1 = document.getElementById("xoccation");
    let drop_item_2 = document.getElementById("xcakes");

    drop_item_1.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    drop_item_2.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    window.addEventListener("click", () => {
      drop_item_1.style.display = "none";
      drop_item_2.style.display = "none";
    });

    drop_lable_1.addEventListener("click", (event) => {
      event.stopPropagation();
      if (dd1_toggelstate === false) {
        drop_item_1.style.display = "flex";
        dd1_toggelstate = true;
        drop_item_2.style.display = "none";
        dd2_togglestate = false;
      } else {
        dd1_toggelstate = false;
        drop_item_1.style.display = "none";
      }
    });

    drop_lable_2.addEventListener("click", (event) => {
      event.stopPropagation();
      if (dd2_togglestate === false) {
        drop_item_2.style.display = "flex";
        dd2_togglestate = true;
        drop_item_1.style.display = "none";
        dd1_toggelstate = false;
      } else {
        dd2_togglestate = false;
        drop_item_2.style.display = "none";
      }
    });
  }

  window.addEventListener("load", dropdown_inititalizer);

  return (
    <div className="headermaincontainer">
      <div className="Projnamehead slide-top">
        <div className="SecItmside pcview">
          <p id="poclab">Occations⌄</p>
          <table className="ddropdown scale-up-left" id="xoccation">
            <td className="dditemcol1">
              <tr>item number one</tr>
              <tr>item number two</tr>
              <tr>item number three</tr>
            </td>
            <td className="dditemcol2">
              <tr>item number four</tr>
              <tr>item number five</tr>
              <tr>item number six</tr>
            </td>
          </table>
        </div>
        <p className="PriItmMid">ANISH PROJECT</p>
        <div className="SecItmside pcview">
          <p id="pcclab">Cakes⌄</p>
          <table className="ddropdown scale-up-left" id="xcakes">
            <td className="dditemcol1">
              <tr>item number one</tr>
              <tr>item number two</tr>
              <tr>item number three</tr>
            </td>
            <td className="dditemcol2">
              <tr>item number four</tr>
              <tr>item number five</tr>
              <tr>item number six</tr>
            </td>
          </table>
        </div>
      </div>
    </div>
  );
};
