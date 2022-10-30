import React, { useState } from "react";
import "./Styles/Main.css";
import {HashRouter as Router, Route,  Routes} from "react-router-dom";
import Cabinet from "./Pages/Cabinet";
import ModulePage from "./Pages/ModulePage";
import Autorization from "./Pages/Autorization";
import TestPage from "./Pages/TestPage";
import AccumPage from "./Pages/AccumPage";
import Modal from "./UI/Modal";

function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Autorization/>}></Route>
          <Route path="/Main" element={<Cabinet/>}></Route>
          <Route path="/ModulePage" element={<ModulePage/>}></Route>
          <Route path="/TestPage" element={<TestPage/>}></Route>
          <Route path="/Accum" element={<AccumPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
