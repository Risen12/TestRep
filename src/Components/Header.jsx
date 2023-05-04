import React from "react";
import { useDispatch } from "react-redux";
import { UpdateData } from "../Store/Reducers/InfoSlice";
import "../Styles/Header.css";
import MyButton from "../UI/MyButton";
import accum_settings from "../Images/accum_settings1.png";
import { useState } from "react";
import Modal from "../UI/Modal";



const Header = function(props)
{
    const [ModalActive, setModalActive] = useState(false);
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
                <div id="server_status"></div>
                <div id="server_text">server</div>
                <div id="button_panel">
                </div>
                <div id="header_text">Личный кабинет</div>
                <div id="username">{props.username}</div>
                <div id="user_ava">
                    <div id="ava"><p id="text_ava">{props.username}</p></div>
                </div>
            </div>
        )
        }
        else if(props.type === 'device')
        {
            return (
                <div id="header">
                <Modal active={ModalActive} setActive={setModalActive}/>
                <div id="server_status"></div>
                <div id="server_text">server</div>
                <div id="button_panel">
                    <MyButton text={"ТЕСТ"} onPress={() => {
                                let url = "https://subabonent.ru/danila/api100.php";
                                fetch(url)
                                .then(response => response.json())
                                .then(state => dispatch(UpdateData(state.data.values)));
                                console.log("Функция Тест вызвана!");
                        }}/>
                    <MyButton onPress={() => {setModalActive(true)}} text={<img src={accum_settings} id="settings_button" alt="settings"></img>} class="btn"/>
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