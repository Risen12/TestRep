import React from "react";
import { useDispatch } from "react-redux";
import { UpdateData } from "../Store/Reducers/InfoSlice";
import "../Styles/Header.css";

function Test()
{

};

const Header = function()
{
    let dispatch = useDispatch();
    return (
        <div id="header">
            <div id="server_status">
                <div id="server_text">server</div>
            </div>
            <div id="test_button">
                <button id="btn" onClick={() => {
                        let url = "https://subabonent.ru/helen/api100.php";
                        fetch(url)
                        .then(response => response.json())
                        .then(state => dispatch(UpdateData(state.data.values)));
                        console.log("Функция Тест вызвана!");
                }}>ТЕСТ</button>
            </div>
            <div id="header_text">RadaR3 - динамические системы наблюдения и контроля за промышленным оборудованием </div>
            <div id="username">username</div>
            <div id="user_ava">
                <div id="ava"><p id="text_ava">Admin</p></div>
            </div>
        </div>
    )
};

export default Header;