import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { commerce } from '../../lib/Commerce'

import "./Blog.css";




export const Blog = () => {
  const [Allcakes, setAllcakes] = useState();
  const [TopCakes, setTopCakes] = useState();

  const fetchCakes = async () => {

    let thereAre_topcakes;
    let thereAre_allcakes;

    thereAre_topcakes = JSON.parse(window.sessionStorage.getItem('cakeg_topcake'));
    thereAre_allcakes = JSON.parse(window.sessionStorage.getItem('cakeg_allcake'));

    if (thereAre_topcakes !== null) {
      setTopCakes(thereAre_topcakes)
    } else {

      const topcakes_data = await commerce.products.list({
        category_slug: ["cake-header"], limit: 5,
      }).then(response => response.data);

      window.sessionStorage.setItem('cakeg_topcake', JSON.stringify(topcakes_data));

      setTopCakes(topcakes_data);
    }

    if (thereAre_allcakes !== null) {
      setAllcakes(thereAre_allcakes)
    } else {
      const allcakes_data = await commerce.products.list({
        category_slug: ["allcakes"], limit: 20,
      }).then(response => response.data);

      setAllcakes(allcakes_data);

      window.sessionStorage.setItem('cakeg_allcake', JSON.stringify(allcakes_data))

    }






  }

  useEffect(() => {
    fetchCakes();
  }, []);

  return (

    <div className="whole-blog-wrapper">
      <div className="main-blog-container fade-in">
        {TopCakes
          ? <div className="upper-blog-container fade-in">
            <figure className="upperfig upperblog_xfirst_container">
              <img src={TopCakes[0].image.url} alt="" />
              <figcaption className="scale-up-left">{TopCakes[0].name}</figcaption>
            </figure>
            <div className="upperblog_xsecond_container">
              <figure className="upperfig">
                <img src={TopCakes[1].image.url} alt="" />
                <figcaption className="scale-up-left">{TopCakes[1].name}</figcaption>
              </figure>
              <figure className="upperfig">
                <img src={TopCakes[2].image.url} alt="" />
                <figcaption className="scale-up-left">{TopCakes[2].name}</figcaption>
              </figure>
              <figure className="upperfig ">
                <img src={TopCakes[3].image.url} alt="" />
                <figcaption className="scale-up-left">{TopCakes[3].name}</figcaption>
              </figure>
              <figure className="upperfig ">
                <img src={TopCakes[4].image.url} alt="" />
                <figcaption className="scale-up-left">{TopCakes[4].name}</figcaption>
              </figure>
            </div>
          </div>
          : <div className="heading_loader"></div>
        }
        <div className="lower-div-container">
          {Allcakes
            ?
            Allcakes.map((cakex, index) => (

              <Link to={
                {
                  pathname: "/cake/" + cakex.name.replace(/\s/g, '-') + "/",
                }
              }
                state={{ id: cakex.id }}
                className="each-lowercase"
                key={cakex.id}
              >
                <img src={Allcakes[index].image.url} alt="" className="lowerfig" />
                <div className="case_container">
                  <div>
                    <p className="lowerfigcaption">{cakex.name}</p>
                    <p className="lowerfigprice">Rs.{cakex.price.formatted.slice(0, -2)}</p>
                  </div>
                </div>
              </Link>
            ))
            : ""}
        </div>
      </div>
    </div >
  );
};