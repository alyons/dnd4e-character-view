import user from '../userReducer';
import {
    LOG_IN,
    LOG_OUT
} from '../../actions/userActions';

describe('user reducer', () => {
    let state = { };
    let action = { };

    beforeEach(() => {
        state = { };

        action = {
            type: 'UNKOWN_ACTION'
        };
    });

    it('should return default state for bad actions', () => {
        const expectedState = state;
        expect(user(state, action)).toEqual(expectedState);
    });

    it('should log in a user', () => {
        let userObj = { name: 'testUser' };
        const expectedState = userObj;
        action = Object.assign({}, state, {
            type: LOG_IN,
            user: userObj
        });
        expect(user(state, action)).toEqual(expectedState);
    });
});