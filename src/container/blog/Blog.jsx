import React, { useEffect, useState } from "react";

import "./Blog.css";

import upcakeone from "../../assets/uppercakewhite.jpeg";
import upcaketwo from "../../assets/uppercakebirthtwo.jpeg";

export const Blog = () => {
  const [All_blogs, setAll_blogs] = useState();

  useEffect(() => {
    setAll_blogs([
      {
        cakeoccation: "birthday",
        cakename: "dark blue chears",
        price: "1200",
        cakeimg: upcakeone,
      },
      {
        cakeoccation: "wedding",
        cakename: "pornstar wed",
        price: "420",
        cakeimg: upcakeone,
      },
    ]);
  }, []);

  return (
    <div className="whole-blog-wrapper">
      <div className="main-blog-container fade-in">
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
        <div className="lower-div-container">
          {All_blogs &&
            All_blogs.map((cray) => {
              return (
                <div key={cray.cakename} className="lowerfig">
                  <img src={cray.cakeimg} alt="" />
                  <div className="forPClass scale-up-left">
                    <p>{cray.cakename}</p>
                    <p>for {cray.cakeoccation}</p>
                    <p>RS.{cray.price}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
