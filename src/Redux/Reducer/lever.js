import * as leverTypes from '../Constant/lever';

const lever = sessionStorage.getItem("lever");
var initialState = {};
if(lever){
     initialState = {
        lever: lever
    };
}else{
     initialState = {
        lever: "1"
    };
}

const myReduces = (state = initialState, action)=>{
    switch(action.type){
        case leverTypes.LEVER_SUCCESS: {
            return {
                ...state,
                lever
            };
        }
        default:
            return state;
    };
};

export default myReduces;
