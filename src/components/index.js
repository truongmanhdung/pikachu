import React from 'react';
import PropTypes from 'prop-types';
import Clock from "./clock";
import Header from "./header";

Home.propTypes = {

};

function Home(props) {
    return (
        <div>
            <Header />
            <Clock />
        </div>
    );
}

export default Home;
