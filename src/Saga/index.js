import {all, call, put, select, takeEvery, takeLatest} from 'redux-saga/effects'
import * as types from './../Redux/Constant/types'
import * as leverType from '../Redux/Constant/lever'
import {updatePointSuccess} from "../Redux/Actions/point";
import {updateLeverSuccess} from "../Redux/Actions/lever";
import {reLoadListSuccess, showListSuccess} from "../Redux/Actions";

import {addSameId, checkTwoPoint} from "../Selector/index"

let checkRequest = 0;
let checkObj = [];
function* watcherClick() {
    yield takeEvery(types.checkTwoButton,getTwoClick);
}
function* handleItem(list) {
    if(checkObj[0].id === checkObj[1].id &&
         list[checkObj[0].index][checkObj[0].indexItem]
          !== list[checkObj[1].index][checkObj[1].indexItem]) {
        const x1 = checkObj[0].index;
        const x2 = checkObj[1].index;
        const y1 = checkObj[0].indexItem;
        const y2 = checkObj[1].indexItem;
        const pMin = checkObj[0];
        const pMax = checkObj[1];
        if(checkTwoPoint(list, x1, x2, y1, y2, pMin, pMax)) {
            yield put({type: types.changStatusTrue, checkObj});
            // yield put({type: types.checkPointAdd, point});
        }
    }
    checkObj = [];
    checkRequest = 0;
}

function* getTwoClick(action) {
    let {item, list, point} = action;
    checkRequest++;
    item.index = action.index;
    item.indexItem = action.indexitem;
    checkObj.push(action.item);
    const newList1 = JSON.parse(JSON.stringify(list));
    if(addSameId(newList1)){
        yield put({type: types.handleArr})
    }
    const newList = JSON.parse(JSON.stringify(list));
    if(checkRequest === 2) {
        try {
            yield call(() => handleItem(newList, point));
        } catch(error) {
            console.log(error);
        }
    }
}
function* updateLeverSaga({payload}){
    const {lever,rows,cols} = payload;
    yield sessionStorage.setItem("lever",lever);
    yield sessionStorage.setItem("cols",cols);
    yield sessionStorage.setItem("rows",rows);
    yield put(updateLeverSuccess(lever,rows,cols));
}

function* showListSaga(){
    const cols =  yield select(state => state.lever.cols);
    const rows =  yield select(state => state.lever.rows);
    const init =  JSON.parse(sessionStorage.getItem("api"));
    const limit = 4;
    const setState = (initialState) => {
        for(let i = 0; i < cols; i++) {
            const random = Math.floor(Math.random() * init.length);
            const item = init[random];
            initialState.push ({
                id: item.id,
                status: false,
                img: item.image,
                check: item.check
            });
            item.check++;
            if(item.check === limit) {
                init.splice(random, 1);
            }
        }
        return initialState;
    }

    const setStateTwo = (initialStateTwo) => {
        for(let i = 0; i < rows; i++) {
            const array = setState([]);
            initialStateTwo.push(array);
        }
        return initialStateTwo;
    }
    const newState = setStateTwo([]);
    yield put(showListSuccess(newState))
}

function* setPointSaga(){
    const point = yield select(state => state.point);
    if(point.point){
        yield put(updatePointSuccess(point.point+10))
    }else{
        yield put(updatePointSuccess(point+10))
    }


}
function* reLoadListSaga({payload}){
    var {list} = payload;
    var listnew = [];
    for(var i = 0; i < list.length ; i++){
        var item1 = list[i];
        for (var j =  0; j < item1.length ; j++) {
            listnew.push(item1[j]);
        }
    }
    var m = [];
    for (var b = 0; b<listnew.length ; b++) {
        if (listnew[b].status === false) {
            m.push(b);
        }
    }
    for(var n = 0; n< listnew.length ; n++){
        if(listnew[n].status === false){
            var item = m[Math.floor(Math.random()*m.length)];
            var temp = listnew[n];
            listnew[n] = listnew[item];
            listnew[item] = temp;
        }
    }

    var chunk;
    var listnew1 = [];
    const a = sessionStorage.getItem("rows");
    if(a){
        while (listnew.length > 0) {
            chunk = listnew.splice(0,a);
            listnew1.push(chunk)
        }
        console.log(listnew1)
        yield put(reLoadListSuccess(listnew1))
    }else{
        while (listnew.length > 0) {
            chunk = listnew.splice(0,8);
            listnew1.push(chunk)
        }
        console.log(listnew1)
        yield put(reLoadListSuccess(listnew1))
    }


}

function* rootSaga() {
    yield takeEvery(types.showList, showListSaga);
    yield takeLatest(leverType.LEVER, updateLeverSaga);
    yield takeLatest(types.changStatusTrue, setPointSaga);
    yield takeLatest(types.reLoadList,reLoadListSaga);
    yield all([
        watcherClick(),
    ])
}

export default rootSaga;
