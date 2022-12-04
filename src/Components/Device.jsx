import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Device.css";
import MyButton from "../UI/MyButton";

const Device = function(props)
{
    const navigator = useNavigate();
    function GoToDevice()
    {
        if(props !== undefined)
        {
            if(props.device == "Пылесос")
            {
                navigator("/TestPage");
            }
            else if(props.device == "Кофейный модуль")
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
        <div id="device" className={props.className}>
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
            <MyButton id="GoToButton" text={"Зайти в панель управления"} onPress={GoToDevice}/>    
        </div>
    )
};


export default Device;