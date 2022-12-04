import React from "react";
import MyButton from "../UI/MyButton";
import "../Styles/ContextMenu.css";
import { useState } from "react";
import { useEffect } from "react";


const ContextMenu = function({positions,status})
{
    const [position,setPosition] = useState({x:0,y:0});
    const [items,setItems] = useState(["Настроить","Контроль","Удалить"]);
    const [ShowContextMenu,setShowContextMenu] = useState(false);
    let styles = {top:`${positions.y}px`,left:`${positions.x}px`};
    useEffect(() =>
    {
        setShowContextMenu(status);
        setPosition({positions});
        styles = {top:`${positions.y}px`,left:`${positions.x}px`};
    },[status,positions]);


    return(
        <div className={ShowContextMenu ? "context_menu_container active" : "context_menu_container"}  onClick={() => setShowContextMenu(false)}>
            <div className="context_menu" onClick={(e) => e.stopPropagation()} style={styles}>
                    <MyButton text={"Настроить"}/>
                    <MyButton text={"Контроль"}/>
                    <MyButton text={"Удалить"}/>
            </div>
        </div>
    )
};


export default ContextMenu;