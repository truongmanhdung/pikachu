import React from 'react';
import PropTypes from 'prop-types';

Specification.propTypes = {

};

function Specification(props) {
    const{lever, checkHandle, point} = props
    return (
        <div className="text-center">
            <h1 style={{
                color: "rgb(253, 125, 74)"
            }}>Mức độ</h1>
            <h1 style={{
                color: "yellow",
                fontWeight: "bold"
            }}>{lever}</h1>
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
    );
}

export default Specification;
