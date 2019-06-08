export const CHARACTER_LOAD_STARTED = 'CHARACTER_LOAD_STARTED';
export const CHARACTER_LOAD_SUCCESS = 'CHARACTER_LOAD_SUCCESS';
export const CHARACTER_LOAD_FAILURE = 'CHARACTER_LOAD_FAILURE';

import axios from 'axios';
import data from '../mockData/terios.dnd4e.json';

const characterLoadStarted = () => ({
    type: CHARACTER_LOAD_STARTED
});

const characterLoadSuccess = character => ({
    type: CHARACTER_LOAD_SUCCESS,
    character
});

const characterLoadFailure = error => ({
    type: CHARACTER_LOAD_FAILURE,
    error
});

export const loadCharacter = () => {
    return dispatch => {
        dispatch(characterLoadStarted());

        axios.get('https://httpstat.us/200')
            .then(res => {
                dispatch(characterLoadSuccess(data));
            }).catch(err => {
                dispatch(characterLoadFailure(err));
            });
    };
};
