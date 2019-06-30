export const CHARACTER_LOAD_STARTED = 'CHARACTER_LOAD_STARTED';
export const CHARACTER_LOAD_SUCCESS = 'CHARACTER_LOAD_SUCCESS';
export const CHARACTER_LOAD_FAILURE = 'CHARACTER_LOAD_FAILURE';
export const ADD_CONDITION = 'ADD_CONDITION';
export const REMOVE_CONDITION = 'REMOVE_CONDITION';

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

export const addCondition = condition => ({
    type: ADD_CONDITION,
    condition
});

export const removeCondition = index => ({
    type: REMOVE_CONDITION,
    index
});

export const loadCharacter = () => {
    return dispatch => {
        dispatch(characterLoadStarted());

        axios.get('https://httpstat.us/200', { crossDomain: true })
            .then(res => {
                dispatch(characterLoadSuccess(data));
            }).catch(err => {
                dispatch(characterLoadFailure(err));
            });
    };
};
