import React, {Component} from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import OpenWeatherMap from 'OpenWeatherMap';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '300',
    height                : '200'
  }
};


class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            modalIsOpen: false
        }
    }
    handleFormSubmit(location) {
        let that = this
        that.setState({
            isLoading: true,
            location: undefined,
            temp: undefined
        })
        OpenWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function(errorMessage){
          //  alert("City Not Found -" + errorMessage)
          that.setState({modalIsOpen: true, isLoading: false});
        })
    }
    closeModal(e) {
        let that = this
        e.preventDefault();
        that.setState({modalIsOpen: false})
    }
    componentDidMount() {
        var location = this.props.location.query.location;

        if(location && location.length > 0) {
            this.handleFormSubmit(location);
            window.history
            .pushState("object or string", "Title", "/"+window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
            .split("?")[0]);
        }
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
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm handleFormSubmit={this.handleFormSubmit.bind(this)} />
                {renderMessage()}

                <Modal isOpen={this.state.modalIsOpen} style={customStyles} contentLabel="Error Modal">
                    <div>
                        <h3 className="text-center">Error</h3>
                        <p  className="text-center">City Not Found</p>
                        <button className="button alert expanded" onClick={this.closeModal.bind(this)}>CLOSE</button>
                    </div>
                </Modal>
            </div>
        );
    }
}



export default Weather;