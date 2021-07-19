import * as actions from  "../Constant/types";

export const updatePointSuccess = (point) => {
    return {
        type: actions.pointSuccess,
        payload: {
            point: point
        }
    }
}

