import { AppActions, UserActions, CharacterActions } from '../actions';

const {
    LOG_IN_STARTED,
    LOG_IN_FAILURE,
    CHAR_LIST_FAILURE,
    CHAR_LIST_SUCCESS
} = UserActions;

const {
    CHARACTER_LOAD_FAILURE,
    CHARACTER_LOAD_STARTED,
    CHARACTER_LOAD_SUCCESS
} = CharacterActions;

const {
    setAppView,
    setLoadingStatus,
    LOADING_STATUS,
    APP_VIEW
} = AppActions;

const actionWhiteList = [
    LOG_IN_STARTED,
    LOG_IN_FAILURE,
    CHAR_LIST_FAILURE,
    CHAR_LIST_SUCCESS,
    CHARACTER_LOAD_FAILURE,
    CHARACTER_LOAD_STARTED,
    CHARACTER_LOAD_SUCCESS
];

const actionInWhiteList = action => {
    return actionWhiteList.includes(action.type);
};

const appMiddleware = store => next => action => {
    next(action);

    if (!actionInWhiteList) {
        return;
    }

    switch(action.type) {
        case LOG_IN_STARTED:
        case CHARACTER_LOAD_STARTED:
            store.dispatch(setLoadingStatus(LOADING_STATUS.LOADING));
            break;
        case LOG_IN_FAILURE:
        case CHAR_LIST_FAILURE:
        case CHARACTER_LOAD_FAILURE:
            store.dispatch(setLoadingStatus(LOADING_STATUS.LOADED));
            break;
        case CHAR_LIST_SUCCESS:
            store.dispatch(setLoadingStatus(LOADING_STATUS.LOADED));
            store.dispatch(setAppView(APP_VIEW.CHAR_LIST));
            break;
        case CHARACTER_LOAD_SUCCESS:
            store.dispatch(setLoadingStatus(LOADING_STATUS.LOADED));
            store.dispatch(setAppView(APP_VIEW.CHAR_SHEET));
            break;
    }
};

export default appMiddleware;
