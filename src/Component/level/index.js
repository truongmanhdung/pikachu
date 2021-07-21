import React from 'react';
import logo from "../../image/logo.png";
import "./style.css";
import {bindActionCreators} from "redux";
import * as leverAction from "../../Redux/Actions/lever";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
function Level(props) {
    // const {levers} = props
    // const [lever, setLever] = useState(levers);
    const onUpdateLever =(lever,rows,cols)=>{
        const {updateLeverCreator} = props;
        const {updateLever} = updateLeverCreator;
        updateLever(lever,rows,cols)
    }
    return (
        <div className="pt-5">
            <div className="text-center pb-5">
                <img src={logo} style={{
                    width: 300
                }} alt=""/>
            </div>
            <div className="row mt-5 pt-5" style={{
                maxWidth: "900px",
                margin: "80px auto"
            }}>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <Link to="/startgame" style={{textDecoration: "none"}}>
                        <div className="p-2">
                            <div onClick={()=>onUpdateLever(1, 8, 8)} className="bg-nen1 pt-4" style={{
                                    height: 300,
                                    borderRadius: "10px",
                                    textAlign: "center",
                                    color: "white",
                                    cursor: "pointer"
                                }}>
                                <h1>Dễ</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                    <Link to="/startgame" style={{textDecoration: "none"}}>
                        <div className="p-2">
                            <div onClick={()=>onUpdateLever(2,12,12)} className="bg-nen2 pt-4" style={{
                                height: 300,
                                borderRadius: "10px",
                                textAlign: "center",
                                color: "white",
                                cursor: "pointer"
                            }}>
                                <h1>Trung bình</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                    <Link to="/startgame" style={{textDecoration: "none"}}>
                        <div className="p-2">
                            <div onClick={()=>onUpdateLever(3,16,16)} className="bg-nen3 pt-4" style={{
                                height: 300,
                                borderRadius: "10px",
                                textAlign: "center",
                                color: "white",
                                cursor: "pointer"
                            }}>
                                <h1 >Khó</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        levers: state.lever
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateLeverCreator: bindActionCreators(leverAction, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Level);
