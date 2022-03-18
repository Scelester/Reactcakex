import React from "react";

import "./Blog.css";

import upcakeone from "../../assets/uppercakewhite.jpeg";
import upcaketwo from "../../assets/uppercakebirthtwo.jpeg";

export const Blog = () => {
  return (
    <div className="whole-blog-wrapper">
      <div className="main-blog-container height0t700">
        <div className="upper-blog-container">
          <figure className="upperfig upperblog_xfirst_container">
            <img src={upcaketwo} alt="" />
            <figcaption className="scale-up-left">upcakeone</figcaption>
          </figure>
          <div className="upperblog_xsecond_container">
            <figure className="upperfig">
              <img src={upcakeone} alt="" />
              <figcaption className="scale-up-left">upcaketwo</figcaption>
            </figure>
            <figure className="upperfig">
              <img src={upcakeone} alt="" />
              <figcaption className="scale-up-left">upcakethree</figcaption>
            </figure>
            <figure className="upperfig ">
              <img src={upcakeone} alt="" />
              <figcaption className="scale-up-left">upcakefour</figcaption>
            </figure>
            <figure className="upperfig ">
              <img src={upcakeone} alt="" />
              <figcaption className="scale-up-left">upcakefive</figcaption>
            </figure>
          </div>
        </div>
        <div className="lower-div-container"></div>
      </div>
    </div>
  );
};
