import * as types from './../Constant/types';

export const showList = () =>{
    return {
        type: types.showList,
    }
}

export const showListSuccess = (list) =>{
    return{
        type: types.showListSuccess,
        list
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
