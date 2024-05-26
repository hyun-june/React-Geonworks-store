import { combineReducers } from "redux";
import authenciateReducer from "./authenticateReducer";
import productSlice from "./productSlice";

export default combineReducers({
    auth : authenciateReducer,
    product : productSlice
});