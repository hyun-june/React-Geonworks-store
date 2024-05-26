import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk'
import rootRedecer from "./reducers"
import productSlice from "./reducers/productSlice";
import authenciateReducer from "./reducers/authenticateReducer";

import { configureStore } from "@reduxjs/toolkit";

// let store = createStore( rootRedecer,  composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
    reducer:{
        auth : authenciateReducer,
        product : productSlice      
    }
})

export default store;
