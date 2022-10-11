import React from "react";
import Device from "./Device";
import "../Styles/DeviceTable.css";
import MyButton from "../UI/MyButton";

const DeviceTable = function()
{
    return(
        <div id="device_table">
            <Device/>
            <Device device={"Пылесос"} IP={"192.168.55.100"} address={"Большие Колпаны, д.120"}/>
            <MyButton id="AddDeviceButton" text={"Добавить новое устройство"}/>
        </div>

    )
};


export default DeviceTable;