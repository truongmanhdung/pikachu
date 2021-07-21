import * as actions from  "../Constant/lever";
import {api1, api2, api3} from "../../apis/pikachu";

export const updateLever = (lever,rows,cols) => {
    if(lever==1){
         sessionStorage.setItem("api",JSON.stringify(api1));
    }else if(lever==2){
         sessionStorage.setItem("api",JSON.stringify(api2));
    }else{
         sessionStorage.setItem("api",JSON.stringify(api3));
    }
    return {
        type: actions.LEVER,
        payload: {
            lever: lever,
            rows: rows,
            cols: cols
        }
    }
}
export const updateLeverSuccess = (lever,rows,cols) => {
    return {
        type: actions.LEVER_SUCCESS,
        payload: {
            lever: lever,
            rows: rows,
            cols: cols
        }
    }
}

