import {
    LOG_IN,
    LOG_OUT,
    logIn,
    logOut
} from '../../src/actions/userActions';

describe('user actions', () => {
    it('should create a login action', () => {
        const user = { profileId: 'someId' };
        const expectedAction = {
            type: LOG_IN,
            user
        };
        expect(logIn(user)).toEqual(expectedAction);
    });

    it('should create a logout action', () => {
        const expectedAction = {
            type: LOG_OUT
        };
        expect(logOut()).toEqual(expectedAction);
    });
});
