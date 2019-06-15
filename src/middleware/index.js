import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import app from './app';
import character from './character';
import user from './user'

const allMiddleware = applyMiddleware(
    thunk,
    app,
    character,
    user
);

export default allMiddleware;
