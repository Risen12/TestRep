import Header from "../Components/Header";
import React from "react";
import Footer from "../Components/Footer";



function AccumPage() {
    return (
      <div id="main">
        <div><Header  type={"device"}  username={"admin"}/></div>
        <div><Footer /></div>
      </div>
    );
  }
  
  export default AccumPage;