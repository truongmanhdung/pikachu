import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

Action.propTypes = {

};

function Action(props) {
    const {showMusic, onExchange, list , resetGame} = props;

    return (
        <div className="d-flex ps-3" style={{
            justifyContent: "space-between",
            width: "600px",
            alignItems: "center",
            margin: "10px auto",
        }}>
            {showMusic()}

            <div className="d-flex align-items-center" onClick={()=>onExchange(list)} style={{
                cursor: "pointer"
            }}>
                <i style={{
                    color: "yellow"
                }} className="fas fa-sync-alt">
                </i>
                <h5 style={{
                    color: "rgb(253, 125, 74)"
                }} className="m-0 mx-2">Đổi vị trí</h5>
            </div>
            <div className="d-flex align-items-center" onClick={()=>resetGame(true)} style={{
                cursor: "pointer"
            }}>
                <i style={{
                    color: "yellow"
                }} className="fas fa-building">
                </i>
                <h5 style={{
                    color: "rgb(253, 125, 74)"
                }} className="m-0 mx-2">Chơi lại</h5>
            </div>
            <Link to="/" style={{textDecoration: "none"}} className="d-flex align-items-center" >
                <i style={{
                    color: "yellow"
                }} className="fas fa-building">
                </i>
                <h5 style={{
                    color: "rgb(253, 125, 74)"
                }} className="m-0 mx-2">Trang chủ</h5>
            </Link>
        </div>
    );
}

export default Action;
