import * as types from "../Constant/types";

export const startTime = (time) => {
    return{
        type: types.startTime,
        payload: {
            time: time
        }
    }
}
export const startTimeSuccess = (time) => {
    return{
        type: types.startTimeSuccess,
        payload: {
            time: time
        }
    }
}
