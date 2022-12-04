import { createSlice } from "@reduxjs/toolkit";

const defaultState =
{
    status : 0,
    timer: 0,
    channels:{}
};

export const ChargerSlice = createSlice({
    name: 'charger_slice',
    initialState:defaultState,
    reducers:
    {
        UpdateData: (state,action) =>
        {
            //state.cm = action.payload.km;
            //state.tv = action.payload.tv;
            state.timer = action.payload.timer;
            var result = action.payload.data;
            result = result.map((element) => element = {channel_number:element.n,amper:(parseFloat(element.c) * 0.001).toFixed(2),volt:(parseFloat(element.v) * 0.001).toFixed(2),charge:(parseFloat(element.e1) * 0.001).toFixed(2),discharge:(parseFloat(element.e2) * 0.001).toFixed(2),status:element.f});
            //console.log(result);
            state.channels = result;
        }
    }
});

const {actions , reducer} = ChargerSlice;

export const {UpdateData} = actions;

export default reducer;