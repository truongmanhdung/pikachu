import { combineReducers } from "redux";
import listpika from "./pikachu";
import lever from "./lever";
const myReducers = combineReducers({
    listpika,
    lever
});

export default myReducers;
