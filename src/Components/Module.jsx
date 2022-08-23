import React, { useEffect, useState } from "react";
import "../Styles/Module.css";
import { useSelector } from "react-redux";



function Checker(value, text_value = null, syrups_value = null)
{
    var status = 1;
    value = parseInt(value,10);
    syrups_value = parseInt(syrups_value,10);
    if(value <= 100 && value > 75 || text_value == "ok"  ||  syrups_value <= 100 && syrups_value > 50)
    {
        status = 1;
        return status;
    }
    else if(value <= 75 && value > 60 || text_value == "warning"  ||  syrups_value <= 50 && syrups_value > 25 )
    {
        status = 2;
        return status;
    }
    else if(value <= 60 && value > 50 || text_value == "error"  || syrups_value <= 25 && syrups_value >= 0 )
    {
        status = 3;
        return status;
    }
    else if(value <= 50 && value > 25 )
    {
        status = 4;
        return status;
    }
    else if(value <= 25 && value > 15)
    {
        status = 5;
        return status;
    }
    else if(value <= 15 && value > 0)
    {
        status = 6;
        return status;
    }
    else
    {
        status = 7;
        return status;
    }
} 


const Module =  function()
{
    let current_state = useSelector(state => state.info);
    const [States, setStates] = useState({
        TV_state :require("../Images/tv-0.png"),
        CM_state : require("../Images/km-0.png"),
        Cooler_state : require("../Images/fr-0.png"),
        Syrups_state : require("../Images/sp-0.png"),
        GlassM_state : require("../Images/dl-0.png"),
        GlassS_state : require("../Images/ds-0.png"),
        Water_state : require("../Images/wt-0.png"),
        DirtyWater_state : require("../Images/ws-0.png"),
        Garbage_state : require("../Images/gb-0.png")
    });
    useEffect(() =>
    {
        setStates(
            {TV_state : require("../Images/tv-1.png"),
            CM_state : require("../Images/km-1.png"),
            Cooler_state : require("../Images/fr-1.png"),
            Syrups_state : require("../Images/sp-1.png"),
            GlassM_state : require("../Images/dl-1.png"),
            GlassS_state : require("../Images/ds-1.png"),
            Water_state : require("../Images/wt-1.png"),
            DirtyWater_state : require("../Images/ws-1.png"),
            Garbage_state : require("../Images/gb-1.png")});
    },[]);

    useEffect(() =>
    {
        setStates({   
            TV_state : require("../Images/tv-" + Checker(null,current_state.tv) + ".png"),
            CM_state : require("../Images/km-" + Checker(null,current_state.cm) + ".png"),
            Cooler_state : require("../Images/fr-" + current_state.cooler.slice(2) + ".png"),
            Syrups_state : require("../Images/sp-" + Checker(null,null,current_state.syrups) + ".png"),
            GlassM_state : require("../Images/dl-" + Checker(current_state.glassM) + ".png"),
            GlassS_state : require("../Images/ds-" + Checker(current_state.glassS) + ".png"),
            Water_state : require("../Images/wt-" + Checker(current_state.water) + ".png"),
            DirtyWater_state : require("../Images/ws-" + Checker(current_state.dwater) + ".png"),
            Garbage_state : require("../Images/gb-" + Checker(current_state.garbage) + ".png"),
        });
    },[useSelector(state => state.info)]); 
    current_state = useSelector(state => state.info);
    console.log(current_state.cooler.slice(2));
    console.log(current_state);

     return(
        <div id="module">
            <marquee id="Shop_name" direction="left" scrollamount="8">Название магазина</marquee>
            <div id="TV_container"><img src={States.TV_state} alt="Can't find img" id="TV"/></div>
            <div id="CM_container"><img src={States.CM_state} alt="Can't find img" id="CM"/></div>
            <div id="Cooler_container"><img src={States.Cooler_state} alt="Can't find img" id="Cooler"/></div>
            <div id="Syrups_container"><img src={States.Syrups_state} alt="Can't find img" id="Syrups"/></div>
            <div id="Glasses_container"><img src={States.GlassM_state} alt="Can't find img" id="glassM"/><img src={States.GlassS_state} alt="Can't find img" id="glassS"/></div>
            <div id="Water_container"><img src={States.Water_state} alt="Can't find img" id="Water"/></div>
            <div id="DWater_container"><img src={States.DirtyWater_state} alt="Can't find img" id="DWater"/></div>
            <div id="Garbage_container"><img src={States.Garbage_state} alt="Can't find img" id="Garbage"/></div>
        </div>
    )
};


export default Module;