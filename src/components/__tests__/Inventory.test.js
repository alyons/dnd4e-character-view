import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Inventory, { } from '../Inventory';

describe('Inventory Component', () => {
    /* let props;

    beforeEach(() => {
        props = { }; // This can be filled in later
    }); */

    it('should render', () => {
        const div = document.createElement('div');
        render(
            <Inventory />,
            div
        );
        unmountComponentAtNode(div);
    });
});
