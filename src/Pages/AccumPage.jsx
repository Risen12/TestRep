import Header from "../Components/Header";
import React from "react";
import Footer from "../Components/Footer";
import Accum from "../Components/Accum";
import "../Styles/AccumPage.css";
import "../Styles/Main.css";



function AccumPage() {
    return (
      <div id="Accum_main">
        <Header  type={"device"}  username={"admin"}/>
        <Accum/>
        <Footer />
      </div>
    );
  }
  
  export default AccumPage;