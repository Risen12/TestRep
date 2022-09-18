import React from "react";
import Device from "./Device";
import "../Styles/DeviceTable.css";

const DeviceTable = function()
{
    return(
        <div id="device_table">
            <Device/>
            <button id="AddDeviceButton">Добавить новое устройство</button>
        </div>

    )
};


export default DeviceTable;