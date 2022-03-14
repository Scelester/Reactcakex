import React from "react";
import { CTA, Navbar } from "./component";
import { Blog, Header, Footer } from "./container";

import "./App.css";

const App = () => {
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
