import { setLoadingStatus, SET_LOADING_STATUS } from '../../src/actions/appActions';

describe('app actions', () => {
    it('should create an action to set loading status', () => {
        const loadingStatus = 'SOME_LOADING_STATUS';
        const expectedAction = {
            type: SET_LOADING_STATUS,
            loadingStatus
        };
        expect(setLoadingStatus(loadingStatus)).toEqual(expectedAction);
    });
});
