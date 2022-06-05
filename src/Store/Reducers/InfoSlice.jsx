import { createAction, createSlice } from "@reduxjs/toolkit";

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


 export const UpdateData = createAction('UpdateData');

const InfoSlice = createSlice({
    name: 'info_slice',
    initialState:defaultState,
    reducers:
    {
        [UpdateData] : function(state, action)
        {
            
        },


    }
});

export default InfoSlice.reducer;

