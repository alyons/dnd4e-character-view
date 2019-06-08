import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import SignIn, { } from '../../src/components/SignIn';
import rootReducer from '../../src/reducers';

const store = createStore(rootReducer);

describe('SignIn Component', () => {
    /* let props;

    beforeEach(() => {
        props = { }; // This can be filled in later
    }); */

    it('should render', () => {
        const div = document.createElement('div');
        render(
            <Provider store={store}>
                <SignIn />
            </Provider>, div);
          unmountComponentAtNode(div);
    });
});
