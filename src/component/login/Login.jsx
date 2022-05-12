import React from "react";

import "./Login.css"


export const Login = () => {

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

    window.addEventListener('load', function () {
        clickingeffect_function()
    })




    return (
        <div className="modal_container">
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
                <span className="spancox password">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />

                </span>
                <span className="spancox">
                    <input type="submit" name="login" className="loginxsubmit" />
                </span>

            </span>
        </div >
    )
}