import React from "react";
import "../Styles/Charger.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import {Bar} from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
import { useState } from "react";
import { useEffect } from "react";
import raise from "../Images/raise.png";
import stop from "../Images/stop.png";
import decrease from "../Images/decrease.png";
import loop from "../Images/loop.png";
import menu from "../Images/menu.png";
import graph from "../Images/graphic.png";
import battery from "../Images/battery.png";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


export const options = 
{
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
        legend:
        {
            position: "bottom",
        },
        title:
        {
            display: true,
            text: "Название графика, можно убрать"
        },
    }
};

const labels = ["first","second","third","fourth","five","six","seven","eight"];

export const data = {
    labels,
    datasets: [
      {
        label: 'Параметр 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Параметр 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };



const Charger = function()
{
    var time = new Date(Date.now());
    const [current_time,setTime] = useState(Date.now());
    const UpdateTime = () =>
    {
        time = Date.now();
        setTime(time);
    }

    setInterval(UpdateTime,1000);

    return(
        <div className="Charger">
            <div className="upper_blocks">
                <div className="upper_block" id="first_block">
                    <div className="volt_data">1.15 V</div>
                    <div className="amper_data">1.15 A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status">Заряд</div>
                </div>
                <div className="upper_block">
                    <div className="volt_data">1.45 V</div>
                    <div className="amper_data">1.45 A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status">Разряд</div>
                </div>
                <div className="upper_block">
                    <div className="volt_data">1.95 V</div>
                    <div className="amper_data">1.95 A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status"><nobr>Защита П/X</nobr></div>
                </div>
                <div className="upper_block">
                    <div className="volt_data">1.35 V</div>
                    <div className="amper_data">1.35 A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status">Заряд</div>
                </div>
                <div className="upper_block">
                    <div className="volt_data">1.05 V</div>
                    <div className="amper_data">1.05 A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status">Разряд</div>
                </div>
                <div className="upper_block">
                    <div className="volt_data">1.15 V</div>
                    <div className="amper_data">1.15 A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status"><nobr>Защита П/X</nobr></div>
                </div>
                <div className="upper_block">
                    <div className="volt_data">1.45 V</div>
                    <div className="amper_data">1.45 A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status">Заряд</div>
                </div>
                <div className="upper_block">
                    <div className="volt_data">1.95 V</div>
                    <div className="amper_data">1.95 A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status">Разряд</div>
                </div>
            </div>
            <div className="main_graphic"><Bar options={options} data={data} height={320}/></div>
            <div className="graphics">Графики (пока непонятно что здесь требуется)</div>
            <div className="logs"><textarea className="logs_textarea" readOnly={true} value="Первая запись в логе"></textarea></div>
            <div className="short_graphic">Мелкий график (также нужно обсудить)</div>
            <div className="right_block">
                <div className="dateTime_block">
                    <div className="time_block">{new Date(current_time).toLocaleTimeString("RU-ru")}</div>
                    <div className="date_block">{time.toLocaleDateString("RU-ru",{day:'numeric',weekday:'long', year: 'numeric'})}</div>
                </div>
                <div className="timerStatus_block">
                    <div className="timer_block">30 мин</div>
                    <div className="status_block">Заряд</div>
                </div>
                <div className="button_panel">
                <button><img src={raise}/></button>
                <button><img src={stop}/></button>
                <button><img src={decrease}/></button>
                <button><img src={loop}/></button>
                </div>
                <div className="charger_battery_settings">
                    <div className="battery_settings_block">Тип: LiPO</div>
                    <div className="battery_settings_block">Umax: 8.60 V</div>
                    <div className="battery_settings_block">Umin: 5.00 V</div>
                    <div className="battery_settings_block">I: 3.00 A</div>
                    <div className="battery_settings_block">C: 3000 mAh</div>
                </div>
                <div className="chargerGraphic_settings">Тип графика</div>
                <div className="charger_settings">
                    <button><img src={battery}/></button>
                    <button><img src={graph}/></button>
                    <button><img src={menu}/></button>
                    </div>
            </div>
    </div>
    )
};


export default Charger;