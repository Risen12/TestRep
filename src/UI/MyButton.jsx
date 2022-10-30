import React from "react";
import "../Styles/MyButton.css";

const MyButton = ({id,text,onPress, type}) =>
{

    return(
            <button id={id} className="btn" type={type} onClick={onPress} >{text}</button>
    )
};


export default MyButton;