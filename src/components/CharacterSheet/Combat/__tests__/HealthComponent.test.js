import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import HealthComponent from '../HealthComponent';

describe('Health Component', () => {
    /* let props;

    beforeEach(() => {
        props = { }; // This can be filled in later
    }); */

    it('should render', () => {
        const div = document.createElement('div');
        render(
            <HealthComponent />,
            div
        );
        unmountComponentAtNode(div);
    });
});
