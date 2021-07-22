import React, {useEffect, useState} from 'react';
import './style.css';

function Clock(props) {
    const {time, timeup} = props
    function showClock(){
        if(timeup>0){
            return (<div className="mx-2">
                <div className="ngoai">
                    <p className="trong" style={{
                        animation: `bg linear`,
                        animationDuration: `${time}s`
                    }}></p>
                </div>
                <p className="text-white" style={{
                    zIndex: 1000,
                    color: "white",
                    textAlign: "center"
                }}>
                    {`0${Math.floor(timeup/60)}`.slice(-2)}:{`0${Math.floor(timeup%60)}`.slice(-2)}</p>

            </div>)
        }else {
            return (
                <div className="text-white">
                    het gio
                </div>
            )
        }
    }
    return (
        showClock()
    );
}

export default Clock;
