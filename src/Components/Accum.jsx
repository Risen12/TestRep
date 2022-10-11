import React from "react";
import "../Styles/Accum.css";

const Accum = function()
{
    var time = new Date(Date.now());
    return(
        <div className="Accum">
            <div className="Shower">
                <div className="Shower_data">
                    <div>1.15</div>
                    <div>1.45</div>
                    <div>1.95</div>
                    <div>1.35</div>
                    <div>1.05</div>
                    <div>1.15</div>
                    <div>1.45</div>
                    <div>1.95</div>
                </div>
                <div className="Shower_current_data">
                    <div>1.15</div>
                    <div>1.45</div>
                    <div>1.95</div>
                    <div>1.35</div>
                    <div>1.05</div>
                    <div>1.15</div>
                    <div>1.45</div>
                    <div>1.95</div>
                </div>
                <div className="indicates_lines">
                    <div className="line">_</div>
                    <div className="line">_</div>
                    <div className="line">_</div>
                    <div className="line">_</div>
                    <div className="line">_</div>
                    <div className="line">_</div>
                    <div className="line">_</div>
                    <div className="line">_</div>
                </div>
                <div></div>
                <div className="Shower_main">Здесь будет изображение, надо подумать какое</div>
            </div>
            <div className="upper_data">
                <div className="upper_time">{time.toLocaleTimeString("RU-ru")}</div>
                <div className="some_text">NiMH/Cc</div>
                <button className="upper_button">V/A</button>
            </div>
            <div className="button_panel">
                <button>Заряд</button>
                <button>STOP</button>
                <button>Разряд</button>
                <button>Цикл</button>
                <button>&rarr;</button>
            </div>
            <div className="down_data">
            <button className="upper_button">mAh</button>
            <div className="digits">06.0  2.0</div>
            </div>
        </div>
    )
};


export default Accum;