import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Clock from "../clock";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as pikachuAction from "../../actions/index";
import {api1,api2,api3} from "../../api/pikachu"
import { Link } from 'react-router-dom';

function Content(props) {
    var api = [];
    var a = 84;
    var c = "Dễ";
    const {lever} = props;
    if(lever==="1"){
        api = api1;
        a = 84;
        c = "Dễ";
    }else if(lever==="2"){
        api = api2;
        a = 56;
        c = "Trung bình"
    }else{
        api = api3;
        a = 42;
        c = "Khó";
    }

    function chunkArray(myArray, chunk_size){
        var results = [];
        while (myArray.length) {
            results.push(myArray.splice(0, chunk_size));
        }
        return results;
    }
    var result = chunkArray(api1, 8);
    console.log(result);

    var pika = [];
    for(var i = 0; i < 4 ; i ++){
        pika.push(...api);
    }



    const [pikachu, setPikachu] = useState(pika);

    useEffect(()=>{
        const {showPikachuCreater} = props;
        const {showPikachu} = showPikachuCreater;
        for (var i = pikachu.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = pikachu[i];
            pikachu[i] = pikachu[j];
            pikachu[j] = temp;
        }
        showPikachu(pikachu);
        setPikachu(pikachu);
    },[pikachu]);

    const angame = (index) =>{
        // console.log(pika);
        // pikachu.splice(pika,1);
        // setPikachu(pikachu);
        console.log(index);
    }

    const handelClickIcon = (index,pika,pikachus)=>{
        // console.log(index);
        // console.log(pika);
        // console.log(pikachus);
    }
    const {pikachus} = props;
    const showIcon = pikachu.map((pika,index)=>{
        return (
            <div onClick={()=>handelClickIcon(index,pika,pikachus)} key={index} className="bg-light" style={{
                width: a,
                height: a,
                padding: 2,
                border: "1px solid black",
                boxSizing: "border-box"
            }}>
                <img src={pika.image} alt="" style={{
                    width: "100%"
                }}/>

            </div>
        );
    })
    return (
        <div>
            <div className="d-flex justify-content-around"
                 style={{width: "1000px", margin: "0px auto", marginBottom: 0}}>
                <div className="text-center">
                    <h1 style={{
                        color: "rgb(253, 125, 74)"
                    }}>Mức độ</h1>
                    <h1 style={{
                        color: "yellow",
                        fontWeight: "bold"
                    }}>{c}</h1>
                    <h1 style={{
                        color: "rgb(253, 125, 74)"

                    }}>Lượt đổi</h1>
                    <h1 style={{
                        color: "yellow",
                        fontWeight: "bold"
                    }}>10</h1>
                    <h1 style={{
                        color: "rgb(253, 125, 74)"
                    }}>Điểm</h1>
                    <h1 style={{
                        color: "yellow",
                        fontWeight: "bold"
                    }}>0</h1>
                </div>
                <div className="body_game  d-flex flex-wrap" style={{
                    width: 672,
                    height: 672,
                    margin: "0 auto"
                }}>
                    {showIcon}
                </div>
                <Clock/>
            </div>
            <div className="d-flex ps-3" style={{
                justifyContent: "space-between",
                width: "600px",
                alignItems: "center",
                margin: "10px auto",
            }}>
                <div className="d-flex align-items-center">
                    <i style={{
                        color: "yellow"
                    }} className="fas fa-volume-up">
                    </i>
                    <h5 style={{
                        color: "rgb(253, 125, 74)"
                    }} className="m-0 mx-2">Tắt âm thanh</h5>
                </div>
                <div className="d-flex align-items-center">
                    <i style={{
                        color: "yellow"
                    }} className="fas fa-sync-alt">
                    </i>
                    <h5 style={{
                        color: "rgb(253, 125, 74)"
                    }} className="m-0 mx-2">Đổi vị trí</h5>
                </div>
                <div className="d-flex align-items-center">
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
    );
}
const mapStateToProps = (state) => {
    return {
        pikachus: state.listpika.pikachus,
        lever: state.lever.lever
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        showPikachuCreater: bindActionCreators(pikachuAction, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);

