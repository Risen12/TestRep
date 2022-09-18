import React from "react";
import "../Styles/Device.css";
import "../Styles/InfoTable.css";

const InfoTable = function()
{
    var time = new Date(Date.now());
    return(
        <div>
          <table>
            <tbody>
              <tr><td>Пользователь</td><td>admin</td></tr>
              <tr><td>Тариф</td><td>-</td></tr>
              <tr><td>Устройства</td><td>1</td></tr>
              <tr><td>Последнее получение данных</td><td>{time.toLocaleTimeString("RU-ru")}</td></tr>
            </tbody>
          </table>
        </div>  
    )
};


export default InfoTable;