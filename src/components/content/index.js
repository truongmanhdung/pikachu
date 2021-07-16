import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Clock from "../clock";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as pikachuAction from "../../actions/index";
import {api1,api2,api3} from "../../api/pikachu"
Content.propTypes = {

};



function Content(props) {
    var api = [];
    const {lever} = props;
    console.log(lever)
    if(lever===1){
        api = api1;
    }else if(lever===2){
        api = api2;
    }else{
        api = api2;
    }

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
    const angame = () =>{

    }

    const {pikachus} = props;
    const showIcon = pikachu.map((pika,index)=>{
        return (
            <div onClick={()=>angame(pika.id,index,pika)} key={index} className="bg-light" style={{
                width: 84,
                height: 84,
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
                 style={{width: "1000px", margin: "40px auto", marginBottom: 0}}>
                <div className="text-center">
                    <h1 style={{
                        color: "rgb(253, 125, 74)"
                    }}>Bàn</h1>
                    <h1 style={{
                        color: "yellow",
                        fontWeight: "bold"
                    }}>1</h1>
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
            <div className="d-flex" style={{
                justifyContent: "space-between",
                width: "500px",
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

