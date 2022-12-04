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
import { connect } from "react-redux";
import { useSelector } from "react-redux";


const Charger = function({current_state})
{
    function DefineStatus(status)
    {
        status = parseInt(status);
        switch(status)
        {
            case 0:
                return "Заряд";
            case 1:
                return "Разряд";
            case 2:
                return "Защита П/X";
            case 3:
                return "что-то";
            default:
                return "Статус";

        }
    };

    function DefineTime(seconds)
    {
        var hours = Math.floor((seconds % 86400) / 3600);
        var minutes = Math.floor((seconds % 3600) / 60);
        //var res_seconds = seconds % 60;

        if(hours < 1)
        {
            return `${minutes} минут`;
        }
        else
        {
            if(hours === 1 || hours === 21)
                return `${hours} час ${minutes} минут`;
            else if(hours >= 5 && hours < 21)
                return `${hours} часов ${minutes} минут`;
            else
            return `${hours} часа ${minutes} минут`;
        }
    };


    const [State,setState] = useState(        
        {
            status:0,
            timer:0,
            channels_data:[  
                {             
                    channel_number:1,
                    amper:0,
                    volt:0,
                    status:0,
                    charge:0,
                    discharge:0
                },
                {
                    channel_number:2,
                    amper:0,
                    volt:0,
                    status:0,
                    charge:0,
                    discharge:0
                },
                {
                    channel_number:3,
                    amper:0,
                    volt:0,
                    status:0,
                    charge:0,
                    discharge:0
                },
                {
                    channel_number:4,
                    amper:0,
                    volt:0,
                    status:0,
                    charge:0,
                    discharge:0
                },
                {
                    channel_number:5,
                    amper:0,
                    volt:0,
                    status:0,
                    charge:0,
                    discharge:0
                },
                {
                    channel_number:6,
                    amper:0,
                    volt:0,
                    status:0,
                    charge:0,
                    discharge:0
                },
                {
                    channel_number:7,
                    amper:0,
                    volt:0,
                    status:0,
                    charge:0,
                    discharge:0
                },
                {
                    channel_number:8,
                    amper:0,
                    volt:0,
                    status:0,
                    charge:0,
                    discharge:0
                },
            ],
    });
    useEffect(() =>
    {
        setState(
            {
                status:0,
                timer:0,
                channels_data:[
                    {
                        channel_number:1,
                        amper:0,
                        volt:0,
                        status:0,
                        charge:0,
                        discharge:0
                    },
                    {
                        channel_number:2,
                        amper:0,
                        volt:0,
                        status:0,
                        charge:0,
                        discharge:0
                    },
                    {
                        channel_number:3,
                        amper:0,
                        volt:0,
                        status:0,
                        charge:0,
                        discharge:0
                    },
                    {
                        channel_number:4,
                        amper:0,
                        volt:0,
                        status:0,
                        charge:0,
                        discharge:0
                    },
                    {
                        channel_number:5,
                        amper:0,
                        volt:0,
                        status:0,
                        charge:0,
                        discharge:0
                    },
                    {
                        channel_number:6,
                        amper:0,
                        volt:0,
                        status:0,
                        charge:0,
                        discharge:0
                    },
                    {
                        channel_number:7,
                        amper:0,
                        volt:0,
                        status:0,
                        charge:0,
                        discharge:0
                    },
                    {
                        channel_number:8,
                        amper:0,
                        volt:0,
                        status:0,
                        charge:0,
                        discharge:0
                    }
                ]
            }
        );
    },[]);

   useEffect(() =>
    {
        setState({   
            timer:current_state.timer,
            status: current_state.status,
            channels_data: current_state.channels

        });
    },[useSelector(state => state.charger)]);


    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
    
    
    const options = 
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
    
    const data = {
        labels,
        datasets: [
          {
            label: 'Амперы',
            data: State.channels_data === undefined ? faker.datatype.number({ min: 0, max: 9 }) : State.channels_data[0] === undefined ? 0 : State.channels_data.map(({amper}) => amper),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Вольты',
            //data: labels.map(() => faker.datatype.number({ min: 0, max: 9 })),
            data: State.channels_data === undefined ? faker.datatype.number({ min: 0, max: 9 }) : State.channels_data[0] === undefined ? 0 : State.channels_data.map(({volt}) => volt),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
    };

    var time = new Date(Date.now());
    const [current_time,setTime] = useState(Date.now());
    const UpdateTime = () =>
    {
        time = Date.now();
        setTime(time);
    }

    setTimeout(1500);

    console.log(State);

    setInterval(UpdateTime,1000);

    return(
        <div className="Charger">
            <div className="upper_blocks">
                <div className="upper_block" id="first_block">
                    <div className="volt_data">{State.channels_data[0] === undefined ? 0 : State.channels_data[0].volt} V</div>
                    <div className="amper_data">{State.channels_data[0] === undefined ? 0 : State.channels_data[0].amper} A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status">Заряд</div>
                </div>
                <div className="upper_block">
                    <div className="volt_data">{State.channels_data[1] === undefined ? 0 : State.channels_data[1].volt} V</div>
                    <div className="amper_data">{State.channels_data[1] === undefined ? 0 : State.channels_data[1].amper} A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status">Разряд</div>
                </div>
                <div className="upper_block">
                    <div className="volt_data">{State.channels_data[2] === undefined ? 0 : State.channels_data[2].volt} V</div>
                    <div className="amper_data">{State.channels_data[2] === undefined ? 0 : State.channels_data[2].amper} A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status"><nobr>Защита П/X</nobr></div>
                </div>
                <div className="upper_block">
                    <div className="volt_data">{State.channels_data[3] === undefined ? 0 : State.channels_data[3].volt} V</div>
                    <div className="amper_data">{State.channels_data[3] === undefined ? 0 : State.channels_data[3].amper} A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status">Заряд</div>
                </div>
                <div className="upper_block">
                    <div className="volt_data">{State.channels_data[4] === undefined ? 0 : State.channels_data[4].volt} V</div>
                    <div className="amper_data">{State.channels_data[4] === undefined ? 0 : State.channels_data[4].amper} A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status">Разряд</div>
                </div>
                <div className="upper_block">
                    <div className="volt_data">{State.channels_data[5] === undefined ? 0 : State.channels_data[5].volt} V</div>
                    <div className="amper_data">{State.channels_data[5] === undefined ? 0 : State.channels_data[5].amper} A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status"><nobr>Защита П/X</nobr></div>
                </div>
                <div className="upper_block">
                    <div className="volt_data">{State.channels_data[6] === undefined ? 0 : State.channels_data[6].volt} V</div>
                    <div className="amper_data">{State.channels_data[6] === undefined ? 0 : State.channels_data[6].amper} A</div>
                    <div className="upper_block_line"></div>
                    <div className="upper_block_status">Заряд</div>
                </div>
                <div className="upper_block">
                    <div className="volt_data">{State.channels_data[7] === undefined ? 0 : State.channels_data[7].volt} V</div>
                    <div className="amper_data">{State.channels_data[7] === undefined ? 0 : State.channels_data[7].amper} A</div>
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
                    <div className="timer_block">{State.timer === undefined ? "0" : DefineTime(State.timer)}</div>
                    <div className="status_block">{State.status === undefined ? "Статус" : DefineStatus(State.status)}</div>
                </div>
                <div className="button_panel">
                <button><img id="raise_img" src={raise} alt="can't find img"/></button>
                <button><img src={stop} alt="can't find img"/></button>
                <button><img src={decrease} alt="can't find img"/></button>
                <button><img src={loop} alt="can't find img"/></button>
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
                    <button><img src={battery} alt="can't find img"/></button>
                    <button><img src={graph} alt="can't find img"/></button>
                    <button><img src={menu} alt="can't find img"/></button>
                    </div>
            </div>
    </div>
    )
};



function mapStateToProps (state) {
    return {
      current_state: state.charger
    }
  }

export default connect(mapStateToProps)(Charger);