import React from "react";
import { CTA, Navbar, Login } from "./component";
import {
  Blog,
  Header,
  Footer,
  Cakepage,
  Admin,
} from "./container";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { window_is_less_than } from "./extrafunction/csshelper";

const App = () => {
  window_is_less_than(900, "tabview", "pcview", "activated", "deactivated");
  return (
    <div className="App">
      <div className="mainbackground">
        <Navbar />
        <Header />
        <CTA />
        <div className="pseudo-body">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<meta http-equiv="refresh" content="3; url = /p:1" />} />
              <Route path="/p:pno" element={<Blog />} />
              <Route path="/admin/" element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
        <Login />
      </div>
    </div>
  );
};

export default App;
