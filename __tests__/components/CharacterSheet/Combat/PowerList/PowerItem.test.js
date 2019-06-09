import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../../../../../src/reducers'
import PowerItem from '../../../../../src/components/CharacterSheet/Combat/PowerList/PowerItem';

describe('PowerItem Component', () => {
    let store;

    beforeEach(() => {
        store = createStore(rootReducer)
    });

    it('should render', () => {
        const div = document.createElement('div');
        let power = { 
            name: 'Power Name',
            powerUsage: 'At-Will',
            flavor: 'This is a test of power.'
        };
        let eventKey = 0;
        render(
            <Provider store={store}>
                <PowerItem power={power} eventKey={eventKey} />
            </Provider>, div);
        unmountComponentAtNode(div);
    });

    it('should render if the power is an encounter power', () => {
        const div = document.createElement('div');
        let power = { 
            name: 'Power Name',
            powerUsage: 'Encounter',
            flavor: 'This is a test of power.'
        };
        let eventKey = 0;
        render(
            <Provider store={store}>
                <PowerItem power={power} eventKey={eventKey} />
            </Provider>, div);
        unmountComponentAtNode(div);
    });

    it('should render if the power is a special encounter power', () => {
        const div = document.createElement('div');
        let power = { 
            name: 'Power Name',
            powerUsage: 'Encounter (Special)',
            flavor: 'This is a test of power.'
        };
        let eventKey = 0;
        render(
            <Provider store={store}>
                <PowerItem power={power} eventKey={eventKey} />
            </Provider>, div);
        unmountComponentAtNode(div);
    });

    it('should render if the power is a daily power', () => {
        const div = document.createElement('div');
        let power = { 
            name: 'Power Name',
            powerUsage: 'Daily',
            flavor: 'This is a test of power.'
        };
        let eventKey = 0;
        render(
            <Provider store={store}>
                <PowerItem power={power} eventKey={eventKey} />
            </Provider>, div);
        unmountComponentAtNode(div);
    });
});