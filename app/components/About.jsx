import React, {Component} from 'react';

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About Page</h1>
            <p>This is a simple weather map. You can search the current temperature of any city in the world by typing the city name in the box</p>

            <h3>Tool use</h3>
            <ul>
                <li><a href="http://facebook.github.io/react">React</a> - This was the JavaScript framework</li>
                <li><a href="http://openweathermap.org">Open Weatehr API</a> - This was the API for getting weather data</li>
            </ul>

            <h3>Project</h3>
            <li><a href="http://github.com/ParishKhan/React-Weather">Github</a> - Project Source code is on Github</li>
        </div>
    );
}

export default About;