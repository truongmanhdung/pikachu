import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as action from '../../Redux/Actions/index';
import Clock from "../clock/index";
import {Link} from "react-router-dom";
import nhac13 from "../../image/nhac.mp3";
import nhac23 from "../../image/nhac2.mp3"
import ReactAudioPlayer from 'react-audio-player';
import "./content.css";
function Content(props){
    const [nhacphat, setNhacPhat] = useState(nhac13);
    const nhac2 = setTimeout(()=>{
        setNhacPhat(nhac23);
        clearInterval(nhac1);
    },1000);
    const nhac1 = setInterval(()=>{
        setNhacPhat(nhac13);
        clearInterval(nhac2)
    },1000)
    var { list, point} = props;
    const [checkHandle, setCheckHandle] = useState(10);
    const [checkReset, setCheckReset] = useState(false);
    const [play, setPlay] = useState(true);

    useEffect(()=>{
        const {newshowList} = props;
        newshowList();
    },[]);
    const resetGame = (checkReset) => {
        setTimeout(()=>{
            setCheckReset(true);
            setCheckHandle(10);

        },100);
        setTimeout(()=>{
            setCheckReset(false);
        },1000);
    }

    const onExchange = () => {
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
                    <div className="d-flex align-items-center" onClick={onPlayMusic}>
                        <i style={{
                            color: "yellow"
                        }} className="fas fa-volume-up">
                        </i>
                        <h5 style={{
                            color: "rgb(253, 125, 74)"
                        }} className="m-0 mx-2">Tắt âm thanh</h5>

                    </div>
                    <ReactAudioPlayer
                        style={{
                            display: "none"
                        }}
                        src={nhacphat}
                        autoPlay={play}
                        controls
                    ></ReactAudioPlayer>
                </div>
        )
        }else{
            html =  (<div className="d-flex align-items-center" onClick={onPlayMusic}>
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
        var timeend = sessionStorage.getItem("timenew");
        const showIcon = list.map((arr, index) => {
            return (
                <div key={index}>
                    {arr.map((item, indexitem) => {
                        if (checkReset === true) {
                            item.status = false;
                        }
                        return (
                           <div key={indexitem} style={timeend === "0" ? {userSelect: "none",pointerEvents: "none", cursor: "default"}: {}}>
                               <div  style={item.status === false ? {} : { opacity: 0, visibility: "hidden" }}>
                                   <div className="focusIcon p-2 bg-light"
                                        style={{ width: a, height: a, boxSizing: "border-box", border: '1px solid', cursor: "pointer" }}
                                        onClick={() => changeStatusItem(arr, list, item, index, indexitem)} disabled={item.status}>
                                       <img style={{ width: "100%" }} src={item.img} alt='error' />
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
                    <div className="text-center">
                        <h1 style={{
                            color: "rgb(253, 125, 74)"
                        }}>Mức độ</h1>
                        <h1 style={{
                            color: "yellow",
                            fontWeight: "bold"
                        }}>{b}</h1>
                        <h1 style={{
                            color: "rgb(253, 125, 74)"

                        }}>Lượt đổi</h1>
                        <h1 style={{
                            color: "yellow",
                            fontWeight: "bold"
                        }}>{checkHandle}</h1>
                        <h1 style={{
                            color: "rgb(253, 125, 74)"
                        }}>Điểm</h1>

                        <h1 style={{
                            color: "yellow",
                            fontWeight: "bold"
                        }}>{point.point? point.point: 0}</h1>
                    </div>
                    <div className="body_game d-flex flex-wrap" style={{
                        width: 672,
                        height: 672,
                        margin: "0 auto"
                    }}>
                        {showIcon}
                    </div>
                    <Clock />
                </div>
                <div className="d-flex ps-3" style={{
                    justifyContent: "space-between",
                    width: "600px",
                    alignItems: "center",
                    margin: "10px auto",
                }}>
                    {showMusic()}

                    <div className="d-flex align-items-center" onClick={()=>onExchange(list)}>
                        <i style={{
                            color: "yellow"
                        }} className="fas fa-sync-alt">
                        </i>
                        <h5 style={{
                            color: "rgb(253, 125, 74)"
                        }} className="m-0 mx-2">Đổi vị trí</h5>
                    </div>
                    <div className="d-flex align-items-center" onClick={()=>resetGame(true)}>
                        <i style={{
                            color: "yellow"
                        }} className="fas fa-building">
                        </i>
                        <h5 style={{
                            color: "rgb(253, 125, 74)"
                        }} className="m-0 mx-2">Chơi lại</h5>
                    </div>
                    <Link to="/" style={{textDecoration: "none"}} className="d-flex align-items-center">
                        <i style={{
                            color: "yellow"
                        }} className="fas fa-building">
                        </i>
                        <h5 style={{
                            color: "rgb(253, 125, 74)"
                        }} className="m-0 mx-2">Trang chủ</h5>
                    </Link>
                </div>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        list: state.tasks,
        point: state.point
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        newState: (index, indexitem) => dispatch(action.changeStatusIcon(index, indexitem)),
        checkButtonClick: (arr, list, item, index, indexitem, point) => dispatch(action.checkButton(arr, list, item, index, indexitem, point)),
        reloadListCreate: (list) => dispatch(action.reLoadList(list)),
        newshowList: () =>dispatch(action.showList()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
