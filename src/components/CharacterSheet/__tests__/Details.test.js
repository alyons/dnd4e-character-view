import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Details from '../Details';

describe('Details Component', () => {
    /* let props;

    beforeEach(() => {
        props = { }; // This can be filled in later
    }); */

    it('should render', () => {
        const div = document.createElement('div');
        render(
            <Details />,
            div
        );
        unmountComponentAtNode(div);
    });
});
