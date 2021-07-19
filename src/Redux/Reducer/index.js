import { combineReducers} from "redux";
import tasks from './list';
import lever from './lever';
import point from "./point";
const myReducer = combineReducers({
    tasks,
    lever,
    point
});

export default myReducer;
