import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { commerce } from '../../lib/Commerce'

import "./Blog.css";




export const Blog = ({ Curpage }) => {
  const [Allcakes, setAllcakes] = useState();
  const [TopCakes, setTopCakes] = useState();
  const [Total_page, setTotal_page] = useState();

  const all_cake_re = async () => {
    const allcakes_data = await commerce.products.list({
      category_slug: ["allcakes"], limit: 1, page: Curpage,
    }).then(response => response);

    setAllcakes(allcakes_data.data);

    setTotal_page(allcakes_data.meta.pagination.total_pages)
  }

  function Next_page_handle() {
    Curpage++;
  }
  function Prev_page_handle() {
    Curpage--;
  }

  const fetchCakes = async () => {


    let thereAre_topcakes = JSON.parse(window.sessionStorage.getItem('cakeg_topcake'));


    if (thereAre_topcakes !== null) {
      setTopCakes(thereAre_topcakes)
    } else {

      const topcakes_data = await commerce.products.list({
        category_slug: ["cake-header"], limit: 5,
      }).then(response => response.data);

      window.sessionStorage.setItem('cakeg_topcake', JSON.stringify(topcakes_data));

      setTopCakes(topcakes_data);

    }


    all_cake_re();

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
            : <div className="heading_loader"></div>
          }


          {Total_page
            ? <div className="pagination_holder">
              {/* show previos, curPage and next 2 and dropdown and next  button*/}

              <button className="prev_page" disabled={Curpage === 1 ? true : false} onClick={Prev_page_handle} >Prev</button>

              <select name="psd" id="page_select_dd"
                className="page_selector_dd"
              >
                {
                  [...Array(Total_page).keys()].map((tp) => (
                    <option value={tp + 1} key={tp}>{tp + 1}</option>
                  ))
                }


              </select>

              <button className="next_page" disabled={Curpage === Total_page ? true : false} onClick={Next_page_handle} >Next</button>

            </div>
            : ""}


        </div>
      </div>
    </div >
  );
};