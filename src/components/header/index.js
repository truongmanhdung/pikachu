import React from 'react';
import PropTypes from 'prop-types';
import pikachu from '../../pikachu.png'
Header.propTypes = {

};

function Header(props) {
    return (
        <div className="text-center p-5">
            <img src={pikachu} alt=""/>
        </div>
    );
}

export default Header;
