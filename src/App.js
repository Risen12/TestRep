import React, { useEffect, useState } from "react";
import "./Styles/Main.css";
import {HashRouter as Router, Route,  Routes} from "react-router-dom";
import Cabinet from "./Pages/Cabinet";
import ModulePage from "./Pages/ModulePage";
import Autorization from "./Pages/Autorization";
import TestPage from "./Pages/TestPage";
import ChargerPage from "./Pages/ChargerPage";


function App() {

  //const [Auth,setAuth] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={document.cookie.includes("auth") === true ? <Cabinet/> : <Autorization/>}></Route>
          <Route path="/Main" element={document.cookie.includes("auth") === true ? <Cabinet/> : <Autorization/>}></Route>
          <Route path="/ModulePage" element={document.cookie.includes("auth") === true ? <ModulePage/> : <Autorization/>}></Route>
          <Route path="/TestPage" element={document.cookie.includes("auth") === true ? <TestPage/> : <Autorization/>}></Route>
          <Route path="/Charger" element={document.cookie.includes("auth") === true ? <ChargerPage/> : <Autorization/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//<Route path="/Main" element={document.cookie.includes("auth") === true ? <Cabinet/> : <Autorization/>}></Route>
