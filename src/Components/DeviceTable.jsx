import React from "react";
import Device from "./Device";
import "../Styles/DeviceTable.css";
import MyButton from "../UI/MyButton";
import { useState } from "react";

const DeviceTable = function({setActive})
{

    function AddDevice()
    {
        ChangeDevices(devices => [...devices,{device: "Кофемашина", IP: "192.168.130.131", address : "Проспект ветеранов"}]);
    };
    const [devices,ChangeDevices] = useState([{device: "Кофейный модуль", IP: "127.0.0.1", address : "Санкт-Петербург, наб. Чёрной речки,д.41к2"},{device :'Пылесос', IP : "192.168.55.100", address: "Большие Колпаны, д.120"}]);
    return(
        <div id="device_table">
{/*             <Device/>
            <Device device={"Пылесос"} IP={"192.168.55.100"} address={"Большие Колпаны, д.120"}/> */}
            {devices.map(function(element, i)
            {
                return <Device key={i} device={element.device} IP={element.IP} address={element.address}/>
            })}
            <MyButton onPress={() => AddDevice()} /*onPress={() => setActive(true)}*/ id="AddDeviceButton" text={"Добавить новое устройство"}/>
        </div>
    )
};


export default DeviceTable;