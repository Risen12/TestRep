import {  configureStore } from '@reduxjs/toolkit';
import  ChargerSlice  from './Reducers/ChargerSlice';
import InfoSlice from './Reducers/InfoSlice';
import userSlice  from './Reducers/userSlice';


export const store = configureStore({
    reducer :{
        user :userSlice,
        info:InfoSlice,
        charger: ChargerSlice
    }
});

export default store;
