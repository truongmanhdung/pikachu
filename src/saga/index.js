import * as leverType from "../constans/lever"
import {
    put,
    takeLatest,
} from "redux-saga/effects";
import {checkLineX,checkLineY,checkRectX,checkRectY,checkMoreX,checkMoreY} from "../selector/index"
import {updateLeverSuccess} from "../actions/lever";
let checkRequest = 0;
let checkObj = [];
let checkHandle = [];


function* updateLeverSaga({payload}){
    const {lever} = payload;
    yield sessionStorage.setItem("lever",lever);
    yield put(updateLeverSuccess(lever));
}


const checkTwoPoint = (list, x1, x2, y1, y2, pMin, pMax) => {
    list[x1][y1].status = true;
    list[x2][y2].status = true;
    return checkLineX(list, x1, x2, y1, y2) ||
        checkLineY(list, x1, x2, y1, y2) ||
        checkRectX(list, pMin, pMax) ||
        checkRectY(list, pMin, pMax) ||
        checkMoreX(list, 1, pMin, pMax) ||
        checkMoreX(list, -1, pMin, pMax) ||
        checkMoreY(list, 1, pMin, pMax) ||
        checkMoreY(list, -1, pMin, pMax);
}

const checkTwoPoint2 = (list, x1, x2, y1, y2, pMin, pMax) => {
    list[x1][y1].status = true;
    list[x2][y2].status = true;
    if (checkLineX(list, x1, x2, y1, y2) ||
        checkLineY(list, x1, x2, y1, y2) ||
        checkRectX(list, pMin, pMax) ||
        checkRectY(list, pMin, pMax) ||
        checkMoreX(list, 1, pMin, pMax) ||
        checkMoreX(list, -1, pMin, pMax) ||
        checkMoreY(list, 1, pMin, pMax) ||
        checkMoreY(list, -1, pMin, pMax)) {
        return true;
    } else {
        list[x1][y1].status = false;
        list[x2][y2].status = false;
        return false;
    }
}

function* handleItem(list){
    if(checkObj[0].id){
        const x1 = checkObj[0].index;
        const x2 = checkObj[1].index;
        const y1 = checkObj[0].indexItem;
        const y2 = checkObj[1].indexItem;
        const pMin = checkObj[0];
        const pMax = checkObj[1];
        if(checkTwoPoint(list,x1,x2,y1,y2,pMin,pMax)){

        }
    }
}

function* rootSaga() {
    yield takeLatest(leverType.LEVER, updateLeverSaga);
}

export default rootSaga;
