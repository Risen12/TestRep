import React from "react";
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


const Module = function()
{
    return(
        <div id="module">
            <marquee id="Shop_name" direction="left" scrollamount="8">Название магазина</marquee>
            <div id="TV_container"><img src={tv0} id="TV"/></div>
            <div id="CM_container"><img src={cm0} id="CM"/></div>
            <div id="Cooler_container"><img src={cooler0} id="Cooler"/></div>
            <div id="Syrups_container"><img src={syrup0} id="Syrups"/></div>
            <div id="Glasses_container"><img src={glassM0} id="glassM"/><img src={glassS0} id="glassS"/></div>
            <div id="Water_container"><img src={water0} id="Water"/></div>
            <div id="DWater_container"><img src={dwater0} id="DWater"/></div>
            <div id="Garbage_container"><img src={garbage0} id="Garbage"/></div>
        </div>
    )
};


export default Module;