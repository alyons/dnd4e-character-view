import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Equipment, { } from '../../../src/components/CharacterSheet/Equipment';

describe('Equipment Component', () => {
    /* let props;

    beforeEach(() => {
        props = { }; // This can be filled in later
    }); */

    it('should render', () => {
        const div = document.createElement('div');
        render(
            <Equipment />,
            div
        );
        unmountComponentAtNode(div);
    });
});
