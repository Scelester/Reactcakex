import React from "react";

import { useState, useEffect } from "react";

import "./Login.css"


export const Login = () => {

    const [Logstate, setLogstate] = useState();

    const saveNshit = () => {

        let rexdat = window.localStorage.getItem("cakeg_usersubmitted_data")

        if (rexdat !== null) {
            setLogstate(true)
        } else {
            setLogstate(false)

            var submit_login = document.getElementsByClassName("loginxsubmit")[0];

            submit_login.addEventListener("click", () => {
                let fullname = document.getElementById("fullname").value;
                let email = document.getElementById("email").value;
                let phone = document.getElementById("phone").value;

                const udat = [fullname, email, phone]

                window.localStorage.setItem('cakeg_usersubmitted_data', udat)

            })
        }


    }


    const clickingeffect_function = () => {
        var login_button = document.getElementsByClassName("loginbutton")[0]
        var close_button = document.getElementsByClassName("modal_closer")[0]
        var modalcontain = document.getElementsByClassName("modal_container")[0]


        login_button.addEventListener("click", function () {
            modalcontain.style.display = "flex";
        })

        close_button.addEventListener("click", function () {
            modalcontain.style.display = "none";
        })
        window.addEventListener("click", function (event) {
            if (event.target === modalcontain) modalcontain.style.display = "none"
        })
    }

    useEffect(() => {
        clickingeffect_function()
        saveNshit();
    }, [])





    return (
        <div>
            {Logstate
                ? ""
                :
                < div className="modal_container" >
                    <span className="login_modal">
                        <span className="modal_closer">&times;</span>
                        <span className="spancox toptext">
                            <p>Please fill up the following fields to login</p>
                        </span>

                        <span className="spancox fullname">
                            <label htmlFor="fullname">Fullname:</label>
                            <input type="text" name="fullname" id="fullname" />

                        </span>
                        <span className="spancox email">
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" id="email" />

                        </span>
                        <span className="spancox phone">
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" name="phone" id="phone" />

                        </span>

                        <span className="spancox">
                            <input type="submit" name="login" className="loginxsubmit" />
                        </span>

                    </span>
                </div >
            }
        </div>
    )
}