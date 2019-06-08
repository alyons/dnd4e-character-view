import { combineReducers } from 'redux';
import app from './appReducer';
import user from './userReducer';
import vitality from './vitalityReducer';
import character from './characterReducer';

export default combineReducers({
    app,
    character,
    user,
    vitality
});
