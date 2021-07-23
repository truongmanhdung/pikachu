import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as action from '../../Redux/Actions/index';
import {startTimeSuccess} from "../../Redux/Actions/time";
import Clock from "../clock/index";
import nhac13 from "../../image/nhac.mp3";
import nhac23 from "../../image/nhac2.mp3"
import "./content.css";
import Music from "../music/music";
import Action from "../actiongame";
import Specification from "../Specifications";
function Content(props){
    const [nhacphat, setNhacPhat] = useState(nhac23);
    const nhac2 = setTimeout(()=>{
        setNhacPhat(nhac23);
        clearInterval(nhac1);
    },120000);
    const nhac1 = setInterval(()=>{
        setNhacPhat(nhac13);
        clearInterval(nhac2)
    },120000)
    var { list, point, time} = props;
    const [checkHandle, setCheckHandle] = useState(10);
    const [checkReset, setCheckReset] = useState(false);
    const [play, setPlay] = useState(false);
    var lever = sessionStorage.getItem("lever");
    useEffect(()=>{
        const time = sessionStorage.getItem("time");
        const {newshowList,startTimeCreate} = props;
        startTimeCreate(time);
        newshowList();
    },[]);
    const resetGame = (list) => {
        const {resetListCreate} = props;
        setTimeout(()=>{
            setCheckReset(true);
            setCheckHandle(10);
            setClick('');
        },100);
        resetListCreate(list);
        setTimeout(()=>{
            setCheckReset(false);
        },1000);
    }

    const onExchange = (list) => {
        const { reloadListCreate } = props;
        let handleLimit = checkHandle - 1;
        if (handleLimit < 0) {
            alert("HẾT LƯỢT ĐẢO");
            setCheckHandle(0);
        } else {
            setCheckHandle(handleLimit);
            reloadListCreate(list);
        }
    }

    const onPlayMusic = () => {
        setPlay(!play);
    }
    sessionStorage.setItem("play",play);
    const changeStatusItem = (arr, list, item, index, indexitem) => {
        const { checkButtonClick} = props;
        checkButtonClick(arr, list, item, index, indexitem);
    }
    const showMusic = () => {
        let html = null;
        if(play === true){
            html =  (
                <div>
                    <div className="d-flex align-items-center" onClick={onPlayMusic} style={{
                        cursor: "pointer"
                    }}>
                        <i style={{
                            color: "yellow"
                        }} className="fas fa-volume-up">
                        </i>
                        <h5 style={{
                            color: "rgb(253, 125, 74)"
                        }} className="m-0 mx-2">Tắt âm thanh</h5>

                    </div>
                    <Music nhac={nhacphat} play={play}/>
                </div>
        )
        }else{
            html =  (<div className="d-flex align-items-center" onClick={onPlayMusic} style={{
                    cursor: "pointer"
                }}>
                        <i style={{
                            color: "yellow"
                        }} className="fas fa-volume-mute">
                        </i>
                        <h5 style={{
                            color: "rgb(253, 125, 74)"
                        }} className="m-0 mx-2">Bật âm thanh</h5>
                    </div>
            )
        }
        return html;
    }
        var lever = sessionStorage.getItem("lever");
        var a = 84;
        var b = "Dễ"
        if(lever === "2"){
            a = 56;
            b = "Trung bình"
        }else if(lever === "3"){
            a = 42;
            b = "Khó"
        }else{
            a = 84;
        }


        const [click, setClick] = useState();
        const hoveClick = (index, indexitem) =>{
            setClick(`oke${index}/${indexitem}`);
        }
        var timeend = sessionStorage.getItem("timenew");
        const showIcon = list.map((arr, index) => {
            return (
                <div key={index}>
                    {arr.map((item, indexitem) => {
                        if (checkReset === true) {
                            item.status = false;
                        }
                        return (
                           <div  key={indexitem} style={timeend === "0" ? {userSelect: "none",pointerEvents: "none", cursor: "default"}: {}}>
                               <div onClick={()=>hoveClick(index, indexitem)} style={click===`oke${index}/${indexitem}`? {opacity: 0.4}: {}} itemID={`oke${index}/${indexitem}`}>
                                   <div  style={item.status === false ? {} : { opacity: 0, visibility: "hidden" }}>
                                       <div className="focusIcon p-2 bg-light"
                                            style={{ width: a, height: a, boxSizing: "border-box", border: '1px solid', cursor: "pointer" }}
                                            onClick={() => changeStatusItem(arr, list, item, index, indexitem)} disabled={item.status}>
                                           <img style={{ width: "100%" }} src={item.img} alt='error' />
                                       </div>
                                   </div>
                               </div>
                           </div>
                        )
                    })}
                </div>)
        })
        return (
            <div className="mt-5">
                <div className="d-flex justify-content-around"
                    style={{ width: "1000px", margin: "0px auto", marginBottom: 0 }}>
                    <Specification lever={b} checkHandle={checkHandle} point={point} />
                    <div className="body_game d-flex flex-wrap" style={{
                        width: 672,
                        height: 672,
                        margin: "0 auto"
                    }}>
                        {showIcon}
                    </div>
                    <Clock time={time}/>
                </div>
                <Action showMusic = {showMusic} onExchange={onExchange} list={list} resetGame={resetGame}  />
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        list: state.tasks,
        point: state.point,
        time: state.time
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        newState: (index, indexitem) => dispatch(action.changeStatusIcon(index, indexitem)),
        checkButtonClick: (arr, list, item, index, indexitem, point) => dispatch(action.checkButton(arr, list, item, index, indexitem, point)),
        reloadListCreate: (list) => dispatch(action.reLoadList(list)),
        newshowList: () =>dispatch(action.showList()),
        resetListCreate: () => dispatch(action.resetList()),
        startTimeCreate: (time) => dispatch(startTimeSuccess(time))

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
