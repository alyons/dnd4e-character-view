import { AppActions } from '../actions';

const APP_VIEW = AppActions.APP_VIEW;
const LOADING_STATUS = AppActions.LOADING_STATUS;
const initialState = { 
    loadingStatus: LOADING_STATUS.INITIAL,
    appView: APP_VIEW.SIGN_IN
};

const app = (state = initialState, action) => {
    switch(action.type) {
        case AppActions.SET_LOADING_STATUS:
            return Object.assign({}, state, {
                loadingStatus: action.loadingStatus
            });
        case AppActions.SET_APP_VIEW:
            return Object.assign({}, state, {
                appView: action.appView
            });
        default:
            return state;
    }
};

export default app;
