import {  configureStore } from '@reduxjs/toolkit';
import InfoSlice from './Reducers/InfoSlice';
import userSlice  from './Reducers/userSlice';


export const store = configureStore({
    reducer :{
        user :userSlice,
        info:InfoSlice
    }
});

export default store;
