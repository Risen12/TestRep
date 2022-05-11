import React from "react";
import "../Styles/Header.css";


const Header = function()
{
    return (
        <div id="header">
            <div id="server_status">
                <div id="server_text">server</div>
            </div>
            <div id="test_button">
                <button id="btn">ТЕСТ</button>
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