import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk'
import rootRedecer from "./reducers"

let store = createStore( rootRedecer,  composeWithDevTools(applyMiddleware(thunk)))

export default store;
