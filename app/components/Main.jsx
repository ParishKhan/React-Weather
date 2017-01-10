import React, {Component} from 'react';
import Nav from 'Nav';

var Main = (props) => {
    return (
        <div>
            <Nav />
            <h1>Main Page</h1>
            {props.children}
        </div>
    );
}

export default Main;