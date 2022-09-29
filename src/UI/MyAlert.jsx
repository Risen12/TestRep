import React from "react";
import "../Styles/MyAlert.css";

const MyAlert = function()
{

    return(
        <div id="MyAlert">
            <div id="AlertHeader">Ошибка</div>
            <div id="AlertBody">Неправильный логин или пароль!</div>
        </div>
    )
};


export default MyAlert;