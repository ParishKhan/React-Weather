import React, {Component} from 'react';

var WeatherMessage = ({location, temp}) => {
    return (
        <div>
            <h3>It's {temp} in {location}</h3>
        </div>
    );
}

export default WeatherMessage;