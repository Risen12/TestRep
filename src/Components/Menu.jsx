import React from "react";
import MyButton from "../UI/MyButton";
import "../Styles/Menu.css";
import { useState } from "react";


const Menu = function()
{
    const [ShowMenu,setMenuShow] = useState(false);


    return(
        <div className="Menu_main">
            <div className={ShowMenu ?"show_menu_button show" : "show_menu_button"}><MyButton  text={">>"} onPress={() => {setMenuShow(ShowMenu === false ? true : false); console.log(ShowMenu)}}/></div>
            <div className={ShowMenu ? "Menu_wrapper show" : "Menu_wrapper"}>
                <MyButton text={"Личный кабинет"}/>
                <MyButton text={"Помощь"}/>
                <MyButton text={"Информация"}/>
                <MyButton text={"Выйти"}/>
            </div>
        </div>
    )
};


export default Menu;