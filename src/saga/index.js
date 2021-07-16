import * as leverType from "../constans/lever"
import {
    fork,
    take,
    call,
    put,
    delay,
    takeLatest,
    select,
    takeEvery
} from "redux-saga/effects";
import {updateLeverSuccess} from "../actions/lever";
function* updateLeverSaga({payload}){
    const {lever} = payload;
    yield sessionStorage.setItem("lever",lever);
    yield put(updateLeverSuccess(lever));
}

function* rootSaga() {
    yield takeLatest(leverType.LEVER, updateLeverSaga);
}

export default rootSaga;
