import { AppActions } from '../actions';

const LOADING_STATUS = AppActions.LOADING_STATUS;
const initialState = { 
    loadingStatus: LOADING_STATUS.INITIAL
};

const app = (state = initialState, action) => {
    switch(action.type) {
        case AppActions.SET_LOADING_STATUS:
            return Object.assign({}, state, {
                loadingStatus: action.loadingStatus
            });
        default:
            return state;
    }
};

export default app;
