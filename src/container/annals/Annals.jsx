import React, { useEffect, useState } from "react";
import { AnnalsAllList } from "./Annals_all_list"


import { commerce } from '../../lib/Commerce'

import "./Annals.css";




export const Annals = () => {

  const [TopCakes, setTopCakes] = useState();
  const [slideshowUF, setSlideshowUF] = useState(0);

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


  function upperfigtoggleslideshow(ssuf = slideshowUF) {
    var upfigelem = document.getElementsByClassName("upperfig")
    for (let index = 0; index < upfigelem.length; index++) {
      const element = upfigelem[index];
      element.style.display = 'none'
    }
    if (window.innerWidth <= 900) {

      upfigelem[ssuf].style.display = 'initial'
    } else {
      upfigelem = document.getElementsByClassName("upperfig")
      for (let index = 0; index < upfigelem.length; index++) {
        const element = upfigelem[index];
        element.style.display = 'block'
      }
    }
  }

  window.addEventListener('load', () => { upperfigtoggleslideshow(); })
  window.addEventListener('resize', () => { upperfigtoggleslideshow(); })

  function next_ss() {
    setSlideshowUF(slideshowUF + 1)
    upperfigtoggleslideshow(slideshowUF + 1);
  }

  function prev_ss() {
    setSlideshowUF(slideshowUF - 1)
    upperfigtoggleslideshow(slideshowUF - 1);
  }


  useEffect(() => {
    fetchCakes();
  }, []);


  return (

    <div className="whole-Annals-wrapper">
      <div className="main-Annals-container fade-in">
        {TopCakes
          ? <div className="upper-Annals-container fade-in"
            id="upper-Annals-container">

            {slideshowUF !== 0
              ? <button className="btn_change_ss ssone" onClick={prev_ss}></button>
              : ""
            }


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

            {slideshowUF !== 4
              ? <button className="btn_change_ss sstwo" onClick={next_ss}></button>
              : ''
            }


          </div>
          : <div className="heading_loader"></div>
        }
      </div>
      <AnnalsAllList />
    </div >
  );
};