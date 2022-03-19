import React from "react";
import { CTA, Navbar } from "./component";
import {
  Blog,
  Header,
  Footer,
  Cakepage,
  Admin,
  Cakeaddpage,
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/cake/:cid" element={<Cakepage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/cakeadd" element={<Cakeaddpage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
};

export default App;
