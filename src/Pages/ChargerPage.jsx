import Header from "../Components/Header";
import React, { Suspense } from "react";
import Footer from "../Components/Footer";
import "../Styles/ChargerPage.css";
import "../Styles/Main.css";
import { useState } from "react";
import MyButton from "../UI/MyButton";
import store from "../Store/Store";
import Charger from "../Components/Charger";
import Menu from "../Components/Menu";
import Informator from "../Informator";
import "../Styles/Main.css";

const Accum  = React.lazy(() => import("../Components/Charger"));

function AccumPage() {
  const [isOpenLazy, isOpenLazyChange] = useState(false);
    return (
      <div id="Charger_main">
        <Header  type={"device"}  username={"admin"}/>
        <Informator store={store.charger}/>
        <Charger/>
        <div className="main_menu"><Menu/></div>
        {/*{isOpenLazy &&  (    
        <Suspense fallback={<div>Loading...</div>}>       
           <Accum/>
        </Suspense>)} */}
        {/* <MyButton onPress={() => {isOpenLazyChange(true);}} text={"Загрузить компонент"}></MyButton> */}
        <Footer />
      </div>
    );
  }
  
  export default AccumPage;