import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Character, { } from '../Character';

describe('Character Component', () => {
    /* let props;

    beforeEach(() => {
        props = { }; // This can be filled in later
    }); */

    it('should render', () => {
        const div = document.createElement('div');
        render(
            <Character />,
            div
        );
        unmountComponentAtNode(div);
    });
});
