import React from "react";
import Device from "./Device";
import "../Styles/DeviceTable.css";

const DeviceTable = function()
{
    return(
        <div id="device_table">
            <Device/>
            <Device device={"Пылесос"} IP={"192.168.55.100"} address={"Большие Колпаны, д.120"}/>
            <button id="AddDeviceButton">Добавить новое устройство</button>
        </div>

    )
};


export default DeviceTable;