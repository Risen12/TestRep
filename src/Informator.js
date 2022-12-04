import { Component } from "react";
import { connect } from "react-redux";
//import { UpdateData } from "./Store/Reducers/InfoSlice";
import {UpdateData} from "./Store/Reducers/ChargerSlice";

class Informator extends Component
{
    constructor(props){ 
        super(props);
        this.state = {info:{}, charger:{}}; 
        this.updateState = this.updateState.bind(this);
      };

    updateState =(NewState) => 
    {
        this.setState({charger:NewState},function()
        {
            //console.log(this.state.info);
            this.props.dispatch(UpdateData(this.state.charger));
            //console.log(this.props.info);
            //console.log(this.state);
        });
    };

    componentDidMount()
    {
      const socket = new WebSocket('ws://78.140.248.103:4000');

      socket.addEventListener('open', () => console.log("соединение открыто"));
      socket.addEventListener('close', () => console.log("соединение закрыто"));
      socket.addEventListener('message', (event) => {
        console.log("получено сообщение от сервера");
        var result = JSON.parse(event.data);
        //console.log(result);
        this.updateState(result);
      });
/*      let url = "https://subabonent.ru/danila/api100.php";
        console.log(this.state);

        fetch(url)
        .then(response => response.json())
        .then(data => this.updateState(data)); */


    }; 

    render()
    {
        return true;
    };
};

function mapStateToProps (state) {
    return {
      info: state.info,
      charger: state.charger
    }
  }


export default connect(mapStateToProps)(Informator);