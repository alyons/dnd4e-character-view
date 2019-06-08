export const SET_APP_VIEW = 'SET_APP_VIEW';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const LOADING_STATUS = {
    INITIAL: 'INITIAL',
    LOADING: 'LOADING',
    LOADED: 'LOADED',
    FAILED: 'FAILED'
};
export const APP_VIEW = {
    SIGN_IN: 'SIGN_IN',
    CHAR_LIST: 'CHAR_LIST',
    CHAR_SHEET: 'CHAR_SHEET'
};

export function setLoadingStatus(loadingStatus) {
    return { type: SET_LOADING_STATUS, loadingStatus };
};

export function setAppView(appView) {
    return { type: SET_APP_VIEW, appView };
};
