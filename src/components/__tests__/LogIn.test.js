import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import LogIn, { } from '../LogIn';
import rootReducer from '../../reducers';

const store = createStore(rootReducer);

describe('LogIn Component', () => {
    /* let props;

    beforeEach(() => {
        props = { }; // This can be filled in later
    }); */

    it('should render', () => {
        const div = document.createElement('div');
        render(
            <Provider store={store}>
                <LogIn />
            </Provider>, div);
          unmountComponentAtNode(div);
    });
});
