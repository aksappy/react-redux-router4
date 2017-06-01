import { combineReducers } from 'redux';

import {HomeReducer as home} from './containers/Home/reducer';
const AppReducers = combineReducers({
    home
});

export default AppReducers;