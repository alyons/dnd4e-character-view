import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { 
    CHARACTER_LOAD_STARTED,
    CHARACTER_LOAD_SUCCESS,
    loadCharacter
} from '../../src/actions/characterActions';
import character from '../../src/mockData/terios.dnd4e.json';

const mockStore = configureMockStore([thunk]);

describe('character actions', () => {
    it('handles loading a character', () => {
        const store = mockStore();
        store.dispatch(loadCharacter());
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: CHARACTER_LOAD_STARTED });
        // expect(actions[1]).toEqual({ type: CHARACTER_LOAD_SUCCESS, character });
    });
});
