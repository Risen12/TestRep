import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers/rootReducer';

const Store = configureStore(
    {
        reducer:{rootReducer}
    }
);


export default Store;