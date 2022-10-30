import React from "react";
import "../Styles/Modal.css";

const Modal = ({active,setActive,children}) =>
{

    return(
        <div className={active ? "Modal active" : "Modal"} onClick={() => setActive(false)}>
            <div className={active ? "Modal_main active" : "Modal_main"} id="Modal_window" onClick={e => e.stopPropagation()}>
                <div className="Modal_header">Заголовок</div>
                <div className="Modal_body">{children}</div>
            </div>
        </div>
    )
};


export default Modal;