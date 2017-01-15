import React, {Component} from 'react';

var WeatherMessage = ({location, temp}) => {
    return (
        <div>
            <h3 className="text-center">It's {temp}&deg;C in {location}</h3>
        </div>
    );
}

export default WeatherMessage;