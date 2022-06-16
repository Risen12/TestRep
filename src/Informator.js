import React from "react";
import { connect } from "react-redux";
import { UpdateData } from "./Store/Reducers/InfoSlice";

class Informator extends React.Component
{
    constructor()
    {
        super();
        this.currentState = {};
    }


    render()
    {
        return null;
    };
    componentDidMount()
    {
        
        function Request()
        {
            let url = "https://subabonent.ru/helen/api100.php";
            fetch(url)
            .then(
                function(response)
                {
                    if(response.status !== 200)
                    {
                        console.log("Some problem with connection. Response status is " + response.status);
                        return null;
                    }
                    response.json().then(function(data)
                    {
                        let Initialstate = 
                        {
                            tv: data.data.values.tv,
                            cm: data.data.values.km,
                            cooler: data.data.values.fr,
                            syrups: data.data.values.sp,
                            glassM: data.data.values.dl,
                            glassS: data.data.values.ds,
                            water: data.data.values.wt,
                            dwater: data.data.values.ws,
                            garbage: data.data.values.gb
                        };
                        console.log(JSON.stringify(data.data.values));
                        this.currentState = Initialstate;
                        console.log(this.currentState);
                        return data;
                    }
                    )
                }
            )
            .catch(
                function(err)
                {
                    console.log("Fetch error: " + err);
                }
            );
        };
        Request();
        console.log(this.props.info);
        const Update = () => UpdateData;
        Update();
        console.log(this.props.info);
    };

};

const MapStateToProps = (state) => {
    return { 
        info:state.info
    }
}

// const mapDispatchToProps=(dispatch)=>({
//    UpdateData:()=>dispatch(UpdateData(Informator.currentState))
//   });
/*   const mapDispatchToProps = (dispatch) => {
    return {
       UpdateData: () => dispatch(UpdateData())
    }
} */


export default connect (MapStateToProps)(Informator);
//export default Informator;