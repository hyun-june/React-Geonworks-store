import { combineReducers } from "redux";
import authenciateReducer from "./authenticateReducer";
import productReducer from "./productReducer";

export default combineReducers({
    auth : authenciateReducer,
    product : productReducer
});