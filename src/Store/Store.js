import {  configureStore } from '@reduxjs/toolkit';
import InfoSlice from './Reducers/InfoSlice';


export const store = configureStore({
    reducer :{
        info:InfoSlice,
    }
});

export default store;
