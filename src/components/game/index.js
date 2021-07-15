import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Clock from "../clock";
import image1 from "../../image/fight.png";
import image2 from  "../../image/pikachu.png";
import image3 from  "../../image/avatar.png";
import image4 from "../../image/bullbasaur.png"
import image5 from  "../../image/eevee.png";
import image6 from  "../../image/instinct.png";
import image7 from "../../image/pokeball.png"
import image8 from  "../../image/smartphone.png";
import image9 from  "../../image/squirtle.png";
import image10 from "../../image/pokeballs.png"
import image11 from "../../image/star.png"
import image12 from  "../../image/mew.png";
import image13 from  "../../image/meowth.png";
import image14 from "../../image/gaming.png"
import image15 from  "../../image/snorlax.png";
import image16 from  "../../image/egg.png";
import image17 from "../../image/crown.png"
import image18 from  "../../image/charmander.png";
import image19 from  "../../image/zubat.png";
import image20 from "../../image/backpack.png"
import image21 from  "../../image/bellsprout.png";
import image22 from  "../../image/map.png";
import image23 from "../../image/clock.png"
import image24 from  "../../image/player.png";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as pikachuAction from "../../actions/index";

Game.propTypes = {

};

const api = [
    {
        id: 1,
        image: image1,
    },
    {
        id: 2,
        image: image2,
    },
    {
        id: 3,
        image: image3,
    },
    {
        id: 4,
        image: image4,
    },
    {
        id: 5,
        image: image5,
    },
    {
        id: 6,
        image: image6,
    },
    {
        id: 7,
        image: image7,
    },
    {
        id: 8,
        image: image8,
    },
    {
        id: 9,
        image: image9,
    },
    {
        id: 10,
        image: image10,
    },
    {
        id: 11,
        image: image11,
    },
    {
        id: 12,
        image: image12,
    },
    {
        id: 13,
        image: image13,
    },
    {
        id: 14,
        image: image14,
    },
    {
        id: 15,
        image: image15,
    },
    {
        id: 16,
        image: image16,
    },
    {
        id: 17,
        image: image17,
    },
    {
        id: 18,
        image: image18,
    },
    {
        id: 19,
        image: image19,
    },
    {
        id: 20,
        image: image20,
    },
    {
        id: 21,
        image: image21,
    },
    {
        id: 22,
        image: image22,
    },
    {
        id: 23,
        image: image23,
    },
    {
        id: 24,
        image: image24,
    },
]
var pika = [];
for(var i = 0; i < 6 ; i ++){
    pika.push(...api);
}


function Game(props) {
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
    const angame = (id) =>{
        console.log(id);
    }
    const {pikachus} = props;
    const showIcon = pikachu.map((pika,index)=>{
        return (
            <div onClick={()=>angame(pika.id)} key={index} className="bg-light" style={{
                width: 50,
                height: 50,
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
                 style={{width: "900px", margin: "40px auto"}}>
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
                    width: 600,
                    height: 600,
                    margin: "0 auto"
                    }}>
                    {showIcon}
                </div>

                <Clock />
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
                    }} className="fas fa-volume-up"></i>
                    <h5 style={{
                        color: "rgb(253, 125, 74)"
                    }} className="m-0 mx-2">Tắt âm thanh</h5>
                </div>
                <div className="d-flex align-items-center">
                    <i style={{
                        color: "yellow"
                    }} className="fas fa-sync-alt"></i>
                    <h5 style={{
                        color: "rgb(253, 125, 74)"
                    }} className="m-0 mx-2">Đổi vị trí</h5>
                </div>
                <div className="d-flex align-items-center">

                    <i style={{
                        color: "yellow"
                    }} className="fas fa-building"></i>
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
        pikachus: state.listpika.pikachus
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        showPikachuCreater: bindActionCreators(pikachuAction, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Game);

