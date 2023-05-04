import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/MiniDevice.css";
import coffee_machine from "../Images/devices_icons/coffee_machine.svg";
import vaccum_cleaner from "../Images/devices_icons/vaccum_cleaner_2.svg";
import { useState } from "react";
import Device from "./Device";
const MiniDevice = function(props)
{
    const navigator = useNavigate();
    function GoToDevice()
    {
        if(props !== undefined)
        {
            if(props.device === "Пылесос")
            {
                navigator("/TestPage");
            }
            else if(props.device === "Кофейный модуль")
            {
                navigator("/ModulePage");
            }
        }
        else
        {
            navigator("/ModulePage");
        }
    };


    const [MousePosition, setMousePosition] = useState({x:0,y:0});

    const [BigDeviceActive,setBigDeviceActive] = useState(false);
    function ShowDevice(e)
    {
        let mouse_pos_x = e.clientX;
        let mouse_pos_y = e.clientY;
        document.documentElement.style.setProperty('--x',mouse_pos_x);
        document.documentElement.style.setProperty('--y',mouse_pos_y);
        setBigDeviceActive(true);
    };

    function DefineDevice()
    {
        switch (props.type){
            case "Кофейный модуль":
                return "../Images/devices_icons/coffee_module.svg";
            case "Кофемашина":
                return coffee_machine;
            case "Зарядное устройство":
                return "charger";
            case "Пылесос":
                 return vaccum_cleaner;
            default: 
                return coffee_machine;
        }
    };

    function ShowBigDeviceHandler(e)
    {
        setBigDeviceActive(true);
        setMousePosition({x:e.pageX,y:e.PageY});
    }


    return(
        <div id="mindevice" className={props.className} onClick={GoToDevice}>
            <div className="circle" onMouseEnter={() => setBigDeviceActive(true)} onMouseLeave={() => setBigDeviceActive(false)}>
                    <img className="circle_img" src={DefineDevice()} alt="img not found"/>
            </div>
            <div className="banner" onMouseEnter={() => setBigDeviceActive(true)} onMouseLeave={() => setBigDeviceActive(false)}>{props.device}</div>     
            <Device type={props.device} status={BigDeviceActive} device={props.device} address={props.address} IP={props.IP}/>
        </div>
    )
};


export default MiniDevice;