import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Item from '../Item';

describe('Item', () => {
    it('should render', () => {
        const div = document.createElement('div');
        render(
            <Item />,
            div
        );
        unmountComponentAtNode(div);
    });
});
