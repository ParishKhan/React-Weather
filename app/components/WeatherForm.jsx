import React, {Component} from 'react';

class WeatherForm extends Component {
    onFormSubmit(e) {
        e.preventDefault();
        let location = this.refs.location.value;

        if(location.length > 0) {
            this.refs.location.value = '';
            this.props.handleFormSubmit(location);
        }
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="text" ref="location" placeholder="Search Weather By City" />
                    <button className="button expanded hollow">Get Weather</button>
                </form>
            </div>
        );
    }
}

export default WeatherForm;