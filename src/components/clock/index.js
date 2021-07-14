import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './style.css';
Clock.propTypes = {

};
// function formatDate(date){
//     const hours = `0${date.getHours()}`.slice(-2);
//     const minutes = `0${date.getMinutes()}`.slice(-2);
//     const seconds = `0${date.getSeconds()}`.slice(-2);
//     return `${hours}:${minutes}:${seconds}`;
// }
function count (num){
    return num - 1;
}
function Clock(props) {
    const [timeup, setTimeUp] = useState(180);

    useEffect(()=>{
        if(timeup>0){
            setTimeout(()=>{
                const timenew = count(timeup);
                setTimeUp(timenew);
            },1000);
        }
    })
    return (
        <div>
            <div className="ngoai">
                <p>Time up: {`0${Math.floor(timeup/60)}`.slice(-2)}:{`0${Math.floor(timeup%60)}`.slice(-2)}</p>
                <p className="trong"></p>
            </div>
        </div>
    );
}

export default Clock;
