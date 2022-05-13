import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { commerce } from '../../lib/Commerce'

import "./Blog.css";




export const Blog = () => {
  const [Allcakes, setAllcakes] = useState();
  const [TopCakes, setTopCakes] = useState();
  const [Curpage, setCurpage] = useState(1);
  const [Total_page, setTotal_page] = useState();

  const first_page = Curpage === 1 ? true : false;

  const fetchCakes = async () => {


    let thereAre_topcakes = JSON.parse(window.sessionStorage.getItem('cakeg_topcake'));
    let thereAre_allcakes = JSON.parse(window.sessionStorage.getItem('cakeg_allcake'));

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
        category_slug: ["allcakes"], limit: 20, page: Curpage,
      }).then(response => response);

      setAllcakes(allcakes_data.data);

      window.sessionStorage.setItem('cakeg_allcake', JSON.stringify(allcakes_data.data))

    }

  }

  const pagination_things = async () => {

    var total_product = await commerce.products.list({
      category_slug: ["allcakes"], limit: 1
    }).then(response => response)

    setTotal_page(total_product)

  }

  useEffect(() => {
    fetchCakes();
    pagination_things();
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
          {Total_page
            ? <div className="pagination_holder">
              {/* show previos, curPage and next 2 and dropdown and next  button*/}
              <button className="previous_page" disabled={first_page}>Prev</button>
              <select name="psd" id="page_select_dd"
                className="page_selector_dd"
              >
                {[...Array(Total_page).keys()].map((tp) => (
                  <option value="lol" key={tp}>{tp + 1}</option>
                ))}


              </select>
              <button className="next_page">Next</button>
            </div>
            : ""}


        </div>
      </div>
    </div >
  );
};