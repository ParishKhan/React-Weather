import React, {Component} from 'react';
import {Link} from 'react-router';

var Examples = (props) => {
   return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are few examples of location to try out</p>
            <ol>
                <li>
                    <Link to="/?location=Dhaka">Dhaka, Bangladesh</Link>
                </li>
                <li>
                    <Link to="/?location=Bogra">Bogra, Rajshahi</Link>
                </li>
            </ol>
        </div>
    ); 
}

export default Examples;