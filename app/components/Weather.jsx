import React, {Component} from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import OpenWeatherMap from 'OpenWeatherMap';

class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }
    handleFormSubmit(location) {
        let that = this
        debugger;
        that.setState({isLoading: true})
        OpenWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function(errorMessage){
            alert(errorMessage)
        })
    }
    render() {
        var {location, temp, isLoading} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3>Temperature is Loading.....</h3>
            } else if(location && temp) {
                return <WeatherMessage location={location} temp={temp} />
            }
        }
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm handleFormSubmit={this.handleFormSubmit.bind(this)} />
                {renderMessage()}
            </div>
        );
    }
}

export default Weather;