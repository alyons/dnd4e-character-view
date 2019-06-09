import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../../../../src/reducers'
import InventoryItem from '../../../../src/components/CharacterSheet/Inventory/InventoryItem';

describe('InventoryItem Component', () => {
    let store = { };
    let item;
    const eventKey = 0;

    beforeEach(() => {
        store = createStore(rootReducer);

        item = {
            name: 'Some Item',
            flavor: 'A bit metallic, probably shouldn\'t lick a sword'
        };
    });

    it('should render', () => {
        const div = document.createElement('div');
        render(
            <Provider store={store}>
                <InventoryItem item={item} eventKey={eventKey} />
            </Provider>, div);
        unmountComponentAtNode(div);
    });
});
