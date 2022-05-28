import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { commerce } from '../../lib/Commerce'


export const AnnalsAllList = () => {

    const [Allcakes, setAllcakes] = useState();
    const [Total_page, setTotal_page] = useState();
    const [Curpage, setCurpage] = useState(parseInt(useParams().pno));
    const [search_dat_f] = useSearchParams();
    const [searching] = useState(search_dat_f.get('search'))

    if (isNaN(Curpage)) {
        setCurpage(1);
    }


    const nextPage = Curpage + 1
    const prevPage = Curpage - 1

    const all_cake_re = async () => {


        const allcakes_data = await commerce.products.list({
            category_slug: ["allcakes"],
            limit: 20,
            page: Curpage,
            query: searching,
        }).then(response => response);

        setAllcakes(allcakes_data.data);

        setTotal_page(allcakes_data.meta.pagination.total_pages)
    }

    const page_selector_for_dd = () => {
        let s_elem = document.getElementById("page_select_dd")
        window.location.href = "/page=" + s_elem.value + "/"
    }


    useEffect(() => {
        if (searching) {
            window.addEventListener('load', () => {
                var upperPhold = document.getElementsByClassName("upper-Annals-container")[0]
                upperPhold.style.display = "none";
            })
        }
        all_cake_re();
    }, []);


    return (
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
                ?
                <div className="pagination_holder">
                    {searching ? ""
                        : <div className="pagination_holder">
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
                    }
                </div>
                : ""
            }



        </div>
    )
}