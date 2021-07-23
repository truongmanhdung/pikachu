import * as types from '../Constant/types';
var initialState = {
    point: 0
};

const myReduces = (state = initialState, action)=>{

    switch(action.type){
        case types.pointSuccess: {
            const {point} = action.payload
            return {
                ...state,
                point: point,
            };
        }
        default:
            return state;
    };
};

export default myReduces;
