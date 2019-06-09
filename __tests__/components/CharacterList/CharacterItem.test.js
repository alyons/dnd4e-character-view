import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../../../src/reducers'
import CharacterItem from '../../../src/components/CharacterList/CharacterItem';

describe('CharacterItem Component', () => {
    let store;

    beforeEach(() => {
        store = createStore(rootReducer)
    });

    it('should render', () => {
        const div = document.createElement('div');
        render(
            <Provider store={store}>
                <CharacterItem />
            </Provider>, div);
        unmountComponentAtNode(div);
    });
});