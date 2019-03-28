import app from '../appReducer';
import {
    SET_LOADING_STATUS,
    LOADING_STATUS
} from '../../actions/appActions';

describe('app reducer', () => {
    let state = { };
    let action = { };

    beforeEach(() => {
        state = {
            loadingStatus: LOADING_STATUS.INITIAL
        };

        action = {
            type: 'UNKNOWN_ACTION'
        };
    });

    it('should return default state for bad actions', () => {
        const expectedState = state;
        expect(app(state, action)).toEqual(expectedState);
    });

    it('should return the updated state with the new value', () => {
        const expectedState = Object.assign({}, state, {
            loadingStatus: LOADING_STATUS.LOADED
        });
        action = Object.assign({}, action, {
            type: SET_LOADING_STATUS,
            loadingStatus: LOADING_STATUS.LOADED
        });
        expect(app(state, action)).toEqual(expectedState);
    });
});
