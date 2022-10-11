import React from "react";
import { useDispatch } from "react-redux";
import { UpdateData } from "../Store/Reducers/InfoSlice";
import "../Styles/Header.css";
import MyButton from "../UI/MyButton";



const Header = function(props)
{
    let dispatch = useDispatch();

        if(props.type === 'auth')
        {
            return (
                <div id="header">
                <div id="server_status">
                </div>
                <div id="server_text">server</div>
                <div id="button_panel">
                </div>
                <div id="header_text">Авторизация</div>
                <div id="username">-</div>
                <div id="user_ava">
                    <div id="ava"><p id="text_ava">-</p></div>
                </div>
            </div>
            )
        }
        else if(props.type === 'cabinet')
        {
            return(
            <div id="header">
                <div id="server_status">
                    <div id="server_text">server</div>
                </div>
                <div id="button_panel">
                    <MyButton text={"Личный кабинет"} />
                    <MyButton text={"Помощь"} />
                </div>
                <div id="header_text">Личный кабинет</div>
                <div id="username">{props.username}</div>
                <div id="user_ava">
                    <div id="ava"><p id="text_ava">{props.username}</p></div>
                </div>
                <MyButton text={"Выйти"} />
            </div>
        )
        }
        else if(props.type === 'device')
        {
            return (
                <div id="header">
                <div id="server_status">
                    <div id="server_text">server</div>
                </div>
                <div id="button_panel">
                    <div id="test_button">
                        <MyButton text={"ТЕСТ"} class="btn" onPress={() => {
                                let url = "https://subabonent.ru/danila/api100.php";
                                fetch(url)
                                .then(response => response.json())
                                .then(state => dispatch(UpdateData(state.data.values)));
                                console.log("Функция Тест вызвана!");
                        }}/>
                    </div>
                </div>
                <div id="header_text">{props.device}</div>
                <div id="username">{props.username}</div>
                <div id="user_ava">
                    <div id="ava"><p id="text_ava">{props.username}</p></div>
                </div>
            </div>
            )
        }
        else
        {
            return (
            <div id="header">
            <div id="server_status">
                <div id="server_text">server</div>
            </div>
            <div id="test_button">
                <MyButton text={"ТЕСТ"} class="btn" click={() => {
                        console.log("Вижу функцию");
                        let url = "https://subabonent.ru/danila/api100.php";
                        fetch(url)
                        .then(response => response.json())
                        .then(state => dispatch(UpdateData(state.data.values)));
                        console.log("Функция Тест вызвана!");
                }}/>
            </div>
            <div id="header_text">RadaR3 - динамические системы наблюдения и контроля за промышленным оборудованием </div>
            <div id="username">username</div>
            <div id="user_ava">
                <div id="ava"><p id="text_ava">Admin</p></div>
            </div>
        </div>
        )
        }

};

export default Header;