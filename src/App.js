import { useState } from "react";
import React  from "react";
//import './App.css';
import Banner from "./componets/Banner.js";
import Footer from "./componets/Footer.js";
import Main from "./componets/Main.js";
import Sidebar from "./componets/Sidebar.js";
import Header from "./componets/Header.js";

function App() {
  return (
    <div className="w-[100vw]">
      <Banner />
      <Header />
      <Sidebar />
      {/* <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
