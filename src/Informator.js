import { Component } from "react";
import { connect } from "react-redux";
import { UpdateData } from "./Store/Reducers/InfoSlice";

class Informator extends Component
{
    constructor(props){ 
        super(props);
        this.state = {info:{}}; 
        this.updateState = this.updateState.bind(this);
      };

    updateState =(NewState) => 
    {
        this.setState({info:NewState},function()
        {
            console.log(this.state.info);
            this.props.dispatch(UpdateData(this.state.info.data.values));
            console.log(this.props.info);
            console.log(this.state.info);
        });
    };

    componentDidMount()
    {
        let url = "https://subabonent.ru/danila/api100.php";
        console.log(this.state);

        fetch(url)
        .then(response => response.json())
        .then(data => this.updateState(data));
    }; 

    render()
    {
        return true;
    };
};

function mapStateToProps (state) {
    return {
      info: state.info
    }
  }


export default connect(mapStateToProps)(Informator);