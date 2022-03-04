import { combineReducers } from "redux";
import { bicisReducer } from "../reducers/BicisReducer";


const reducer = combineReducers({
    bicis: bicisReducer
})