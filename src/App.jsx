import React from "react";
import { CTA, Navbar } from "./component";
import { Blog, Header, Footer } from "./container";

import "./App.css";
import { window_is_less_than } from "./extrafunction/csshelper";

const App = () => {
  window_is_less_than(900, "tabview", "pcview", "activated", "deactivated");
  return (
    <div className="App">
      <div className="mainbackground">
        <div>
          <Navbar />
          <Header />
        </div>
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
