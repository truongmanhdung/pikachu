import * as pikachuTypes from '../constans/pikachu';

const initialState = {};

const myReduces = (state = initialState, action)=>{
    switch(action.type){
        case pikachuTypes.SHOW_PIKACHU: {
            const {pikachus} = action.payload;
            return {
                ...state,
                 pikachus
            };
        }
        default:
            return state;
    };
};

export default myReduces;
