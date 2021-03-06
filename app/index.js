import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {AppContainer} from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store';
const render = (Component) => {
    ReactDOM.render(
        <Provider store ={store}>
        <AppContainer>
            <BrowserRouter>
                <Component/>
            </BrowserRouter>
        </AppContainer>
    </Provider>, document.getElementById('root'));
};
render(App); // Hot Module Replacement API
if (module.hot) {
    module
        .hot
        .accept('./components/App', () => {
            render(App)
        });
}