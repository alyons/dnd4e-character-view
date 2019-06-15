export const LOG_IN_STARTED = 'LOG_IN_STARTED';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const CHAR_LIST_STARTED = 'CHAR_LIST_STARTED';
export const CHAR_LIST_FAILURE = 'CHAR_LIST_FAILURE';
export const CHAR_LIST_SUCCESS = 'CHAR_LIST_SUCCESS';

import axios from 'axios';
import data from '../mockData/user.json';
import charData from '../mockData/charList.json';

const logInStarted = () => ({
    type: LOG_IN_STARTED
});

export const logInFailure = (error) => ({
    type: LOG_IN_FAILURE,
    error
});

export const logInSuccess = (user) => ({
    type: LOG_IN_SUCCESS,
    user
});

export const logIn = () => {
    return dispatch => {
        dispatch(logInStarted());

        axios.get('https://httpsstat.us/200', { crossDomain: true })
            .then(res => {
                dispatch(logInSuccess(data));
            }).catch(err => {
                dispatch(logInFailure(err));
            });
    };
};

const charListStarted = () => ({
    type: CHAR_LIST_STARTED
});

const charListFailure = (error) => ({
    type: CHAR_LIST_FAILURE,
    error
});

const charListSuccess = (characterList) => ({
    type: CHAR_LIST_SUCCESS,
    characterList
});

export const fetchCharacterList = () => {
    return dispatch => {
        dispatch(charListStarted());

        axios.get('https://httpstat.us/200', { crossDomain: true })
            .then(res => {
                dispatch(charListSuccess(charData));
            }).catch(err => {
                dispatch(charListFailure(err))
            });
    };
};
