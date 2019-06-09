import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import CharacterSheet from '../../../src/components/CharacterSheet';
import { isTSAnyKeyword } from '@babel/types';

describe('Character Sheet', () => {
    it('should render', () => {
        const div = document.createElement('div');
        render(
            <CharacterSheet />,
            div
        );
        unmountComponentAtNode(div);
    });
});
