import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/Main.css";


function TestPage() {
  return (
    <div id="TestPage">
      <Header id="header"/>
      <h1 id="TestContent">Это пылесос</h1>
      <Footer id="footer"/>
    </div>
  );
}

export default TestPage;
