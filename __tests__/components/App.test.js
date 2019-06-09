import React from 'react';
// import { shallow } from 'enzyme';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../../src/components/App';
import rootReducer from '../../src/reducers';
import { AppActions } from '../../src/actions';

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
        const appView = AppActions.APP_VIEW.CHAR_LIST;
        const div = document.createElement('div');
        render(
            <Provider store={store}>
                <App appView={appView} />
            </Provider>, div);
        unmountComponentAtNode(div);
    });

    it('renders the main page if state dictates so', () => {
        const appView = AppActions.APP_VIEW.CHAR_SHEET;
        const div = document.createElement('div');
        render(
            <Provider store={store}>
                <App appView={appView} />
            </Provider>, div);
        unmountComponentAtNode(div);
    });
});
