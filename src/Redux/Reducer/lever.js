import * as leverTypes from '../Constant/lever';
import {api1} from "../../apis/pikachu";

var lever = sessionStorage.getItem("lever");
var rows = sessionStorage.getItem("rows");
var cols = sessionStorage.getItem("cols");
var initialState = {};
if(lever){
     initialState = {
         lever: lever,
         rows: rows,
         cols: cols
    };
}else{
     initialState = {
         lever: "1",
         cols: "8",
         rows: "8"
    };
     sessionStorage.setItem("api",JSON.stringify(api1));
}

const myReduces = (state = initialState, action)=>{
    switch(action.type){
        case leverTypes.LEVER_SUCCESS: {
            const {lever,cols,rows} = action.payload;
            return {
                ...state,
                lever: lever,
                rows: rows,
                cols: cols

            };
        }
        default:
            return state;
    };
};

export default myReduces;
