import * as actions from  "../constans/lever";

export const updateLever = (lever) => {
    return {
        type: actions.LEVER,
        payload: {
            lever
        }
    }
}
export const updateLeverSuccess = (lever) => {
    return {
        type: actions.LEVER_SUCCESS,
        payload: {
            lever
        }
    }
}

