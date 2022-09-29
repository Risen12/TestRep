import React from "react";
import "../Styles/MyAlert.css";

const MyButton = function(props)
{

    return(
            <button className="btn" >{props.text}</button>
    )
};


export default MyButton;