import React from 'react';
import { shallow } from 'enzyme';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../App';
import rootReducer from '../../reducers';
import { AppActions } from '../../actions';

describe('App Component', () => {
    let store;

    beforeEach(() => {
        store = createStore(rootReducer);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(
            <Provider store={store}>
                <App />
            </Provider>, div);
        unmountComponentAtNode(div);
    });

    it('renders the main page if state dictates so', () => {
        store = Object.assign({}, store, { 
            app: {
                loadingStatus: AppActions.LOADING_STATUS.LOADED
            }
        });
        const div = document.createElement('div');
        render(
            <Provider store={store}>
                <App />
            </Provider>, div);
        unmountComponentAtNode(div);
    });
});
