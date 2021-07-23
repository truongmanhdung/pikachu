import * as types from './../Constant/types';

export const showList = () =>{
    return {
        type: types.showList,
    }
}

export const showListSuccess = (data) =>{
    return{
        type: types.showListSuccess,
        payload: {
            data
        }
    }
}

export const changeStatusIcon = (index, indexitem) => {
    return {
        type: types.changeStatus,
        index,
        indexitem
    };
}

export const checkButton = (arr, list, item, index, indexitem) => {
    return {
        type: types.checkTwoButton,
        arr,
        list,
        item,
        index,
        indexitem,
    };
}

export const swapArr = (list) => {
    return{
        type: types.handleArr,
        list,
    }
}

export const reLoadList = (list) => {
    return{
        type: types.reLoadList,
        payload: {
            list,
        }
    }
}
export const reLoadListSuccess = (list) => {
    return{
        type: types.reLoadListSucces,
        payload: {
            list,
        }
    }
}

export const resetList = () => {
    return{
        type: types.resetList,
    }
}




