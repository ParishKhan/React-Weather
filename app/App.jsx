import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';
import CSS from 'appCustomCss';

// Load Scripts
// require('style!css!foundation-sites/dist/css/foundation.min.css');
//$(document).foundation();

// Load Styles
// require('style!css!sass!appCustomCss')

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
            <IndexRoute component={Weather} />
        </Route>
    </Router>,
    document.getElementById('app')
)