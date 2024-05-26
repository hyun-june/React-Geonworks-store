import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk'
import rootRedecer from "./reducers"
import productReducer from "./reducers/productReducer";
import authenciateReducer from "./reducers/authenticateReducer";

import { configureStore } from "@reduxjs/toolkit";

// let store = createStore( rootRedecer,  composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
    reducer:{
        auth : authenciateReducer,
        product : productReducer        
    }
})

export default store;
