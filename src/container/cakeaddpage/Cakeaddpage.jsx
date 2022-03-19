import React from "react";

import "./Cakeaddpage.css";

export const Cakeaddpage = () => {
  const handle_submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const to_save_data = {
      [data.get("cake_occation_for")]: {
        "cake name": data.get("cake_name"),
        "cake price": data.get("cake_price"),
        "cake image": data.get("cake_image"),
      },
    };

    console.log(to_save_data);
  };

  return (
    <div className="main_ca_container">
      <form onSubmit={handle_submit} className="main_ca_form">
        <label htmlFor="cakename">Name Of Cake:</label>
        <input type="text" id="cake_name" name="cake_name" />

        <label htmlFor="cake_price">Price of cake in NRS</label>
        <input type="number" id="cake_price" name="cake_price" />

        <label htmlFor="cake_type">Cake Type</label>
        <input type="text" id="cake_type" name="cake_type" />

        <label htmlFor="cake_occation_for">Occation</label>
        <input type="text" id="cake_occation_for" name="cake_occation_for" />

        <label htmlFor="cake_image">Image of Cake:</label>
        <input
          type="file"
          id="cake_image"
          alt=""
          accept="image/*"
          name="cake_image"
        />

        <input type="submit" value="Send" id="sendsubmit" />
      </form>
    </div>
  );
};
