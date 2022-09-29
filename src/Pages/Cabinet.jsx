import Header from "../Components/Header";
import React from "react";
import Footer from "../Components/Footer";
import "../Styles/Cabinet-page.css";
import DeviceTable from "../Components/DeviceTable";
import InfoTable from "../Components/InfoTable";


function Cabinet() {
    return (
      <div id="main">
        <div id="cabinet_header"><Header  type={"cabinet"}  username={"admin"}/></div>
        <div id="devices"><DeviceTable /></div>
        <div id="client_info"><InfoTable /></div>
        <div id="cabinet_footer"><Footer /></div>
      </div>
    );
  }
  
  export default Cabinet;