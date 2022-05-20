import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


import { commerce } from '../../lib/Commerce'

import "./Annals.css";




export const Annals = () => {

  const [Allcakes, setAllcakes] = useState();
  const [TopCakes, setTopCakes] = useState();
  const [Total_page, setTotal_page] = useState();
  const [Curpage] = useState(parseInt(useParams().pno));
  // const [Searching, setSearching] = useState();

  const nextPage = Curpage + 1
  const prevPage = Curpage - 1


  const all_cake_re = async () => {
    const allcakes_data = await commerce.products.list({
      category_slug: ["allcakes"], limit: 20, page: Curpage,
    }).then(response => response);

    setAllcakes(allcakes_data.data);

    setTotal_page(allcakes_data.meta.pagination.total_pages)
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

  const page_selector_for_dd = () => {
    let s_elem = document.getElementById("page_select_dd")
    window.location.href = "/page=" + s_elem.value + "/"
  }





  useEffect(() => {
    fetchCakes();
  }, []);


  return (

    <div className="whole-Annals-wrapper">
      <div className="main-Annals-container fade-in">
        {TopCakes
          ? <div className="upper-Annals-container fade-in">
            <figure className="upperfig upperAnnals_xfirst_container">
              <img src={TopCakes[0].image.url} alt="" />
              <figcaption className="scale-up-left">{TopCakes[0].name}</figcaption>
            </figure>
            <div className="upperAnnals_xsecond_container">
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


        <div className="lower-div-container" id="lower_DC">

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

              {Curpage === 1
                ? <button disabled className="x01button next_page">Prev</button>
                : <a href={"/page=" + prevPage}
                  className="x01button prev_page" >Prev</a>}


              <select name="psd" id="page_select_dd"
                className="page_selector_dd" value={Curpage} onChange={() => page_selector_for_dd()}
              >
                {
                  [...Array(Total_page).keys()].map((tp) => (
                    <option value={tp + 1} key={tp}>
                      {tp + 1}
                    </option >
                  ))
                }


              </select>
              {Curpage === Total_page
                ? <button disabled className="x01button next_page">Next</button>
                : <a href={"/page=" + nextPage}
                  className="x01button next_page">Next</a>}

            </div>
            : ""}


        </div>
      </div>
    </div >
  );
};