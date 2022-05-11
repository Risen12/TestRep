import React from "react";
import Graph_table from "./Components/Graph_table";
import Header from "./Components/Header";
import Module from "./Components/Module";
import Footer from "./Components/Footer";
import "./Styles/App.css";
import Shop_table from "./Components/Shop_table";
import Stuff_table from "./Components/Stuff_table";

function App() {
  return (
    <div id="App">
      <Header id="header"/>
      <Module id="module"/>
      <div id="tables">
        <Shop_table id="shop_table"/>
        <Stuff_table id="stuff_table"/>
        <Graph_table id="graph_table"/>
      </div>
      <Footer id="footer"/>
    </div>
  );
}

export default App;
