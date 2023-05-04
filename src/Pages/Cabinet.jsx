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
import ContextMenu from "../Components/ContextMenu";


function Cabinet() {
  const [ShowContextMenu,setShowContextMenu] = useState(false);
  const [positions,setPositions] = useState({x:0,y:0});

  function ContextMenuHandler(e)
  {
    console.log("I see click");
    if(e.target.classList.contains("circle") || e.target.classList.contains("banner"))
    {
      e.preventDefault();
      setPositions({x: e.pageX, y:e.pageY});
      console.log(positions);
      setShowContextMenu(true);
    }
    else
      e.preventDefault();
  };

  const [modalActive,setModalActive] = useState(false);
    return (
      <div id="main" onContextMenu={(e) => e.preventDefault()}>
        <div id="cabinet_header"><Header  type={"cabinet"}  username={"admin"}/></div>
        <div id="cabinet_menu"><Menu/></div>
        <div id="devices" onContextMenu={(e) => ContextMenuHandler(e)} ><DeviceTable active={modalActive}  setActive={setModalActive}/></div>
        <div id="client_info"><InfoTable /></div>
        <div id="cabinet_footer"><Footer /></div>
        <Modal active={modalActive} setActive={setModalActive}/>
        <ContextMenu positions={positions} status={ShowContextMenu}/>
      </div>
    );
  }
  
  export default Cabinet;