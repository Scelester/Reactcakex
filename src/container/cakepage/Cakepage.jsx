import React from "react";

import "./Cakepage.css";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react"

import { commerce } from '../../lib/Commerce'

export const Cakepage = () => {

  const location = useLocation();

  const [Product, setProduct] = useState();
  const fetchproduct = async () => {
    const xprod = await commerce.products.retrieve(location.state.id)
    setProduct(xprod);

  }

  useEffect(() => {
    fetchproduct();
  }, [])


  return (
    <div>
      {Product
        ?
        < div className="cakemain">
          <p className="cakename">{Product.name}</p>
          <img src={Product.image.url} alt=''></img>
          <p className="cakediscription">{Product.description.slice(3, -4)}</p>
          <button className="ordercake">Order Now <br /> Rs.{Product.price.raw}</button>
          <div className="similarcakes">

          </div>
        </div>
        : <div className="heading_loader"></div>
      }

    </div >
  );
};
