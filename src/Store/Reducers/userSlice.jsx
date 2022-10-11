import { createSlice } from "@reduxjs/toolkit";

const defaultState =
{
    user: "-",
    user_ava: "",
    devices_count: "",
    devices : { }

};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState:defaultState,
    reducers:
    {
        UpdateData: (state,action) =>
        {
            console.log(action.payload);
            state.user = action.payload.user;
            state.devices_count = action.payload.devices_count;
            state.devices = action.payload.devices;
        }
    }
});

const {actions , reducer} = userSlice;

export const {UpdateData} = actions;

export default reducer;