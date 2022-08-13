import { current } from "@reduxjs/toolkit";
import React from "react";
import { UpdateData } from "./Store/Reducers/InfoSlice";

class Informator extends React.Component
{
    constructor(props){ 
        super(props);
        this.state = {info:{}}; 
        this.updateState = this.updateState.bind(this);
      };
        

    updateState =(NewState) => 
    {
        this.setState({info:NewState}, function(){console.log(this.state)});
    };

    componentDidMount()
    {
        let url = "https://subabonent.ru/helen/api100.php";
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

export default Informator;