import React from "react";
import { CTA, Navbar, Login } from "./component";
import {
  Annals,
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
        <div className="pseudo-body">
          <BrowserRouter>
            <Navbar />
            <Header />
            <CTA />
            <Routes>
              <Route path="/" element={<Annals />} />
              <Route path="/page=:pno" element={<Annals />} />
              <Route path="/cake/:cid/" element={<Cakepage />} />
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
