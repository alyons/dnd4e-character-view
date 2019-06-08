import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './reducers';
import allMiddleware from './middleware';

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composedEnhancer(allMiddleware)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

