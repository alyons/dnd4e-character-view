import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from '../Header';
import rootReducer from '../../reducers';

describe('Header Component', () => {
    let store;

    beforeEach(() => {
        store = createStore(rootReducer);
    });

    it('should render', () => {
        const div = document.createElement('div');
        render(
            <Provider store={store}>
                <Header />
            </Provider>, div);
        unmountComponentAtNode(div);
    });

    it('should render a different soure with a value', () => {
        store = Object.assign({}, store, {
            user: {
                imageUrl: 'a different url'
            }
        });
        const div = document.createElement('div');
        render(
            <Provider store={store}>
                <Header />
            </Provider>, div);
        unmountComponentAtNode(div);
    });
});
