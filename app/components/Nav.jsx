import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

var Nav = (props) => {
    return (
        <div>
            <ul>
                <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
                <li><Link activeClassName="active" to="/About">About</Link></li>
                <li><Link activeClassName="active" to="/Examples">Examples</Link></li>
            </ul>
        </div>
    );
}

export default Nav;