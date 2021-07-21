import * as types from "../Constant/types";

const rows = sessionStorage.getItem("rows");
const cols = sessionStorage.getItem("cols");
const myReduces = (state = [] , action) => {
    switch (action.type){
        case types.showList:
            return state;
        case types.showListSuccess:
            const {data} = action.payload;
            return data;
        case types.reLoadList:
            return state
        case types.reLoadListSucces:
            const {list} = action.payload;
            return list;
        case types.viewList:
            return state;
        case types.changeStatus:
            state[action.index][action.indexitem].status = !state[action.index][action.indexitem].status;
            return [...state];
        case types.checkTwoButton:
            return [...state];
        case types.changStatusTrue:
            state[action.checkObj[0].index][action.checkObj[0].indexItem].status = true;
            state[action.checkObj[1].index][action.checkObj[1].indexItem].status = true;
            return [...state];
        case types.handleArr:
            const newStateSwap = [];
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if(state[i][j].status === false) {
                        newStateSwap.push(state[i][j]);
                    }
                }
            }
            for (let i = newStateSwap.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newStateSwap[i], newStateSwap[j]] = [newStateSwap[j], newStateSwap[i]];
            }
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (state[i][j].status === false) {
                        state[i][j] = newStateSwap[0];
                        newStateSwap.splice(0, 1);
                    }
                }
            }
            return [...state];
        default: return state;
    }
}

export default myReduces;
