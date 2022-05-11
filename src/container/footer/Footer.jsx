import React from "react";

import gmail_logo from "../../assets/Email_logo.png"
import fb_logo from "../../assets/Facebook_Logo.png"
import insta_logo from "../../assets/Insta_Logo.png"

import "./Footer.css";

export const Footer = () => {
  return (
    <div className="fcontain">
      <hr />
      <div className="footer-main-container">
        <p className="contacttext">Contact & Socials</p>
        <a className="clink" href="https://www.youtube.com/"><img src={gmail_logo} alt="" width="50px" /></a>
        <a className="clink" href="https://www.youtube.com/"><img src={fb_logo} alt="" width="40px" /></a>
        <a className="clink" href="https://www.youtube.com/"><img src={insta_logo} alt="" width="40px" /></a>
      </div>
    </div>
  )
};
