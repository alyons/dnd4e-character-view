import { combineReducers } from 'redux';
import app from './appReducer';
import health from './healthReducer';
import user from './userReducer';

export default combineReducers({
    app,
    health,
    user
});
