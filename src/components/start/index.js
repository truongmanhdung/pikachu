import React from 'react';
import PropTypes from 'prop-types';
import pikachu from '../../1.png';
import {Link, Route, Switch} from "react-router-dom";

import Game from "../game";
import Header from "../header";
StartView.propTypes = {

};

function StartView(props) {

    return (
        <div>
            <Header/>
            <div className="row align-items-center">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="text-center">
                        <div className="m-3">
                            <Link to="/game" className="btn btn-primary">Bắt đầu</Link>
                        </div>
                        <div className="m-3">
                            <Link to="" className="btn btn-info">Tiếp tục</Link>
                        </div>
                        <div className="m-3">
                            <Link className="btn btn-danger">Hướng dẫn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                    <img src={pikachu} style={{
                        width: "100%"
                    }} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default StartView;
