import Header from "../Components/Header";
import React from "react";
import Footer from "../Components/Footer";
import "../Styles/Cabinet-page.css";
import DeviceTable from "../Components/DeviceTable";
import InfoTable from "../Components/InfoTable";
import Modal from "../UI/Modal";
import { useState } from "react";
import Menu from "../Components/Menu";
import "../Styles/Main.css";


function Cabinet() {
  const [modalActive,setModalActive] = useState(false);
    return (
      <div id="main">
        <div id="cabinet_header"><Header  type={"cabinet"}  username={"admin"}/></div>
        <div id="cabinet_menu"><Menu/></div>
        <div id="devices"><DeviceTable active={modalActive} setActive={setModalActive} /></div>
        <div id="client_info"><InfoTable /></div>
        <div id="cabinet_footer"><Footer /></div>
        <Modal active={modalActive} setActive={setModalActive}/>
      </div>
    );
  }
  
  export default Cabinet;