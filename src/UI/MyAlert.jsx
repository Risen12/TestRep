import React from "react";
import "../Styles/MyAlert.css";

const MyAlert = function({active,setShowAlert,children,title})
{

    //const [ShowAlert,setShowAlert] = useState(false);

    return(
        <div className="AlertContainer">
            <div className={active  ? "MyAlert show" : "MyAlert"} onClick={() => {setShowAlert(false);console.log(children);}}>
                <div  className="AlertHeader">{title}</div>
                <div  className="AlertBody">{children}</div>
            </div>
        </div>
    )
};


export default MyAlert;