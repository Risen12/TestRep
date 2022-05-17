import React from "react";

class Informator extends React.Component
{
    render()
    {
        return null;
    };

    componentDidMount()
    {
        let state = {
            tv:'ok',
            cm:'ok',
            cooler:'ok',
            syrups:'100%',
            glassM:'100%',
            glassS:'100%',
            water:'0%',
            dwater:'0%',
            garbage:'0%'
        };

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
                        state = 
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
                        console.log(state);
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

    };

};

export default Informator;