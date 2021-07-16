import * as leverTypes from '../constans/lever';

const initialState = {
    lever: 1
};

const myReduces = (state = initialState, action)=>{
    switch(action.type){
        case leverTypes.LEVER_SUCCESS: {
            const {lever} = action.payload;
            console.log(lever);
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
