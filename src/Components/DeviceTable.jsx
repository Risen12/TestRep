import React from "react";
import Device from "./Device";
import "../Styles/DeviceTable.css";
import MyButton from "../UI/MyButton";
import { useState } from "react";
import MiniDevice from "./MiniDevice";
import ContextMenu from "./ContextMenu";

const DeviceTable = function({setActive})
{

    function AddDevice()
    {
        //ChangeDevices(devices => [...devices,{device: "Кофемашина", IP: "192.168.130.131", address : "Проспект ветеранов"}]);
    };
    //const [devices,ChangeDevices] = useState([{device: "Кофейный модуль", IP: "127.0.0.1", address : "Санкт-Петербург, наб. Чёрной речки,д.41к2"},{device :'Пылесос', IP : "192.168.55.100", address: "Большие Колпаны, д.120"}]);
    return(
        <div id="device_table">
            <MiniDevice className="table_device" device="Кофемашина №1" type="Кофемашина"/>
            <MiniDevice device="Пылесос №1" type="Пылесос"/>
            <MiniDevice device="Кофемашина №1" type="Кофемашина"/>
            <MiniDevice device="Пылесос №1" type="Пылесос"/>
            <MiniDevice device="Кофемашина №1" type="Кофемашина"/>
            <MiniDevice device="Пылесос №1" type="Пылесос"/>
            <MiniDevice device="Кофемашина №1" type="Кофемашина"/>
            <MiniDevice device="Пылесос №1" type="Пылесос" IP="192.168.55.1" address="Привет"/>
            <div className="add_device_button">
            <MyButton text={"Добавить устройство"}/>
            </div>
        </div>
        
    )
};


export default DeviceTable;