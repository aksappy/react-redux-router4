import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from '../containers/Home';
import About from './About';
import NoMatch from './NoMatch';
const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li><Link to="/howareyou">No Match</Link></li>
            </ul>
            <div></div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route component={NoMatch}/>
            </Switch>
        </div>
    )
}

function mapStateToProps(state) {
    return {state}
}

export default App;