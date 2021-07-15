import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.png'
Header.propTypes = {

};

function Header(props) {
    return (
        <div className="text-center pb-5">
            <img src={logo} style={{
                width: 300
            }} alt=""/>
        </div>
    );
}

export default Header;
