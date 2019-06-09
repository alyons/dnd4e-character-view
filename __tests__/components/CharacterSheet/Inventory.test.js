import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../../../src/reducers'
import Inventory from '../../../src/components/CharacterSheet/Inventory';

describe('Inventory Component', () => {
    let store;

    beforeEach(() => {
        store = createStore(rootReducer)
    });

    it('should render', () => {
        const div = document.createElement('div');
        render(
            <Provider store={store}>
                <Inventory />
            </Provider>, div);
        unmountComponentAtNode(div);
    });
});
