import * as actions from  "../constans/pikachu";

export const showPikachu = (pikachus) => {
    return {
        type: actions.SHOW_PIKACHU,
        payload: {
            pikachus
        }
    }
}

export const changeStatusIcon = (index, indexItem) => {
    return {
        type: actions.CHANGESTATUS,
        payload: {
            index,
            indexItem
        }
    }
}
//
// export const clickIcon = (pika,)
