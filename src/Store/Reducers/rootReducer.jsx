const defaultState =
{
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



const rootReducer = (state = defaultState,action) =>
{
    switch (action.type) {
        
        default:
            return state;
    }

};


export default rootReducer;