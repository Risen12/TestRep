import { createSlice } from "@reduxjs/toolkit";

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

const InfoSlice = createSlice({
    name: 'info_slice',
    initialState:defaultState,
    reducers:
    {
        UpdateData(state,action)
        {
            console.log("i see action");
            console.log(action.payload);
            state.tv = action.payload.tv;
            state.cm = action.payload.cm;
            state.cooler = action.payload.cooler;
            state.syrups = action.payload.syrups;
            state.glassM = action.payload.glassM;
            state.glassS = action.payload.glassS;
            state.water = action.payload.water;
            state.dwater = action.payload.dwater;
            state.garbage = action.payload.garbage;
        }
    }
});

export default InfoSlice.reducer;
export const {UpdateData} = InfoSlice.actions;
