// Redux Imports
import {applyMiddleware, createStore} from 'redux';
import AppReducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
let store = createStore(AppReducers, applyMiddleware(thunk, logger));
export default store;