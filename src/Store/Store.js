import { combineReducers, configureStore } from '@reduxjs/toolkit';
import InfoSlice from './Reducers/InfoSlice';


const rootReducer = combineReducers(
    {
        info:InfoSlice
    }
)


const Store = configureStore(
    
    {
        reducer:rootReducer,
    }
);


export default Store;