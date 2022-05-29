import React, { useEffect, useState } from "react";
import { AnnalsAllList } from "./Annals_all_list"


import { commerce } from '../../lib/Commerce'

import "./Annals.css";




export const Annals = () => {

  const [TopCakes, setTopCakes] = useState();

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

        <AnnalsAllList />


      </div>
    </div >
  );
};