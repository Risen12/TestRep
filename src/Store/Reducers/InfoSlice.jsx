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

export const InfoSlice = createSlice({
    name: 'info_slice',
    initialState:defaultState,
    reducers:
    {
        UpdateData: (state,action) =>
        {
            state.cm = action.payload.km;
            state.tv = action.payload.tv;
            state.cooler = action.payload.fr;
            state.syrups = action.payload.sp;
            state.glassM = action.payload.dl;
            state.glassS = action.payload.ds;
            state.garbage = action.payload.gb;
            state.water = action.payload.wt;
            state.dwater = action.payload.ws;
        }
    }
});

const {actions , reducer} = InfoSlice;

export const {UpdateData} = actions;

export default reducer;
