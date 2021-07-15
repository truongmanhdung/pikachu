import * as actions from  "../constans/pikachu";

export const showPikachu = (pikachus) => {
    return {
        type: actions.SHOW_PIKACHU,
        payload: {
            pikachus
        }
    }
}

