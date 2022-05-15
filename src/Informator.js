import React from "react";

class Informator extends React.Component
{
    render()
    {
        return null;
    };

    componentDidMount()
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
                    console.log(data);
                }
                )
            }
        )
        .catch(
            function(err)
            {
                console.log("Fetch error" + err);
            }
        )
    };

};

export default Informator;