import React from "react";
import "../Styles/Device.css";

const Device = function()
{
    function GoToDevice()
    {
        window.location.replace("http://localhost:3000/ModulePage");
    }

    return(
        <div id="device" >
            <div id="server_connect">
                <div id="server_connect_text">Статус связи</div>
            </div>
            <div id="device_name">Кофейный модуль №001</div>
            <table id="info">
                <thead>
                    <tr><th>Параметр</th><th>Значение</th></tr>
                </thead>
                <tbody>
                    <tr><td>IP-адрес</td><td>127.0.0.1</td></tr>
                    <tr><td>Адрес оборудования</td><td>Санкт-Петербург, наб. Чёрной речки,д.41к2</td></tr>
                    <tr><td>Вид оборудования</td><td>Кофейный модуль</td></tr>
                    </tbody>
            </table>   
            <button id="GoToButton" onClick={GoToDevice}>Зайти в панель управления</button>    
        </div>
    )
};


export default Device;