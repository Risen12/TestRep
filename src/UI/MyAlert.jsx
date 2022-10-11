import React from "react";
import "../Styles/MyAlert.css";

const MyAlert = function()
{

    return(
        <div className="MyAlert">
            <div  className="AlertHeader">Ошибка</div>
            <div  className="AlertBody">Неправильный логин или пароль!</div>
        </div>
    )
};


export default MyAlert;