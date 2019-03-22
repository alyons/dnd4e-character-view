export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const LOADING_STATUS = {
    INITIAL: 'INITIAL',
    LOADING: 'LOADING',
    LOADED: 'LOADED',
    FAILED: 'FAILED'
};

export function setLoadingStatus(loadingStatus) {
    return { type: SET_LOADING_STATUS, loadingStatus };
}
