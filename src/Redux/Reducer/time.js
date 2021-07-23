import * as types from '../Constant/types';
const time = sessionStorage.getItem("time");
const initialState = time;

const myReduces = (state = initialState, action)=>{

    switch(action.type){
        case types.startTime:
            return state;
        case types.startTimeSuccess:
            const {time} = action.payload;
            return time;
        default:
            return state;
    };
};

export default myReduces;
