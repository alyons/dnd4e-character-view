import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Main, { } from '../Main';

describe('Main Component', () => {
    /* let props;

    beforeEach(() => {
        props = { }; // This can be filled in later
    }); */

    it('should render', () => {
        const div = document.createElement('div');
        render(
            <Main />,
            div
        );
        unmountComponentAtNode(div);
    });
});
