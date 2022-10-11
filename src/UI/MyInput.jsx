import React from "react";
import "../Styles/MyInput.css";

const MyInput = function({id,plholder,text, type, changeAction})
{

    return(
        <input id={id} className="MyInput" onChange={changeAction} type={type} value={text} placeholder={plholder}/>
    )
};


export default MyInput;