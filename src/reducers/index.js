import { combineReducers } from 'redux';
import app from './appReducer';
import user from './userReducer';
import vitality from './vitalityReducer';

export default combineReducers({
    app,
    user,
    vitality
});
