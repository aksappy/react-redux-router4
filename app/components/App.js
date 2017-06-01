import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../containers/Home';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Homes</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <div></div>
            <Route exact path="/" component={Home}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {state}
}

export default App;