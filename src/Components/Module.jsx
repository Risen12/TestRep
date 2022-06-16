import React, { useEffect, useState } from "react";
import "../Styles/Module.css";
import tv0 from "../Images/tv-0.png";
import cm0 from "../Images/km-0.png";
import cooler0 from "../Images/fr-0.png";
import syrup0 from "../Images/sp-0.png";
import glassM0 from "../Images/dl-0.png";
import glassS0 from "../Images/ds-0.png";
import water0 from "../Images/wt-0.png";
import dwater0 from "../Images/ws-0.png";
import garbage0 from "../Images/gb-0.png";
import tv1 from "../Images/tv-1.png";
import cm1 from "../Images/km-1.png";
import cooler1 from "../Images/fr-1.png";
import syrup1 from "../Images/sp-1.png";
import glassM1 from "../Images/dl-1.png";
import glassS1 from "../Images/ds-1.png";
import water1 from "../Images/wt-1.png";
import dwater1 from "../Images/ws-1.png";
import garbage1 from "../Images/gb-1.png";
import { useSelector } from "react-redux";


const Module = function()
{

    const [States, setStates] = useState([tv0,cm0,cooler0,syrup0,glassM0,glassS0,water0,dwater0,garbage0]);
    useEffect(() =>
    {
        setStates([tv1,cm1,cooler1,syrup1,glassM1,glassS1,water1,dwater1,garbage1]);
    },[]);

    const current_state = useSelector(state => state.info);
    console.log(current_state);

    

    return(
        <div id="module">
            <marquee id="Shop_name" direction="left" scrollamount="8">Название магазина</marquee>
            <div id="TV_container"><img src={States[0]} alt="Can't find img" id="TV"/></div>
            <div id="CM_container"><img src={States[1]} alt="Can't find img" id="CM"/></div>
            <div id="Cooler_container"><img src={States[2]} alt="Can't find img" id="Cooler"/></div>
            <div id="Syrups_container"><img src={States[3]} alt="Can't find img" id="Syrups"/></div>
            <div id="Glasses_container"><img src={States[4]} alt="Can't find img" id="glassM"/><img src={States[5]} alt="Can't find img" id="glassS"/></div>
            <div id="Water_container"><img src={States[6]} alt="Can't find img" id="Water"/></div>
            <div id="DWater_container"><img src={States[7]} alt="Can't find img" id="DWater"/></div>
            <div id="Garbage_container"><img src={States[8]} alt="Can't find img" id="Garbage"/></div>
        </div>
    )
};


export default Module;