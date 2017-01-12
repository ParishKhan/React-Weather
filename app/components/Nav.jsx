import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends Component {
    onSearch(e) {
        e.preventDefault()
        alert('Not yet wired up')
    }
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">React Weather App</li>
                        <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
                        <li><Link activeClassName="active" to="/About">About</Link></li>
                        <li><Link activeClassName="active" to="/Examples">Examples</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Search" /></li>
                            <li><button type="button" className="button">Search Weather</button></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

export default Nav;