import Header from "../Components/Header";
import React, { Suspense } from "react";
import Footer from "../Components/Footer";
import "../Styles/AccumPage.css";
import "../Styles/Main.css";
import { useState } from "react";
import MyButton from "../UI/MyButton";

const Accum  = React.lazy(() => import("../Components/Accum"));

function AccumPage() {
  const [isOpenLazy, isOpenLazyChange] = useState(false);
    return (
      <div id="Accum_main">
        <Header  type={"device"}  username={"admin"}/>
        {isOpenLazy &&  (    
        <Suspense fallback={<div>Loading...</div>}>       
           <Accum/>
        </Suspense>)}
        <MyButton onPress={() => {isOpenLazyChange(true)}} text={"Загрузить компонент"}></MyButton>
        <Footer />
      </div>
    );
  }
  
  export default AccumPage;