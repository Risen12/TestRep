import React, { useState } from "react";
import "./Styles/Main.css";
import {HashRouter as Router, Route,  Routes} from "react-router-dom";
import Cabinet from "./Pages/Cabinet";
import ModulePage from "./Pages/ModulePage";
import Autorization from "./Pages/Autorization";
import TestPage from "./Pages/TestPage";
import ChargerPage from "./Pages/ChargerPage";


function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Autorization/>}></Route>
          <Route path="/Main" element={<Cabinet/>}></Route>
          <Route path="/ModulePage" element={<ModulePage/>}></Route>
          <Route path="/TestPage" element={<TestPage/>}></Route>
          <Route path="/Charger" element={<ChargerPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
