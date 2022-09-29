import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Device.css";

const Device = function(props)
{
    const navigator = useNavigate();
    function GoToDevice()
    {
        if(props != undefined)
        {
            if(props.device.includes("Пылесос"))
            {
                navigator("/TestPage");
            }
            else
            {
                navigator("/ModulePage");
            }
        }
        else
        {
            navigator("/ModulePage");
        }
    }

    return(
        <div id="device" >
            <div id="server_connect">
                <div id="server_connect_text">Статус связи</div>
            </div>
            <div id="device_name">{props.device ? props.device + " №001" : "Кофейный модуль №001"}</div>
            <table id="info">
                <thead>
                    <tr><th>Параметр</th><th>Значение</th></tr>
                </thead>
                <tbody>
                    <tr><td>IP-адрес</td><td>{props.IP ? props.IP : "127.0.0.1"}</td></tr>
                    <tr><td>Адрес оборудования</td><td>{props.address ? props.address : "Санкт-Петербург, наб. Чёрной речки,д.41к2"}</td></tr>
                    <tr><td>Вид оборудования</td><td>{props.device ? props.device : "Кофейный модуль"}</td></tr>
                    </tbody>
            </table>   
            <button id="GoToButton" onClick={GoToDevice}>Зайти в панель управления</button>    
        </div>
    )
};


export default Device;