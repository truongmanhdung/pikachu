import { combineReducers} from "redux";
import tasks from './list';
import lever from './lever';
import point from "./point";
import time from  "./time"
const myReducer = combineReducers({
    tasks,
    lever,
    point,
    time,
});

export default myReducer;
