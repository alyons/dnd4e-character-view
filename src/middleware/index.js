import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import character from './character';

const allMiddleware = applyMiddleware(
    thunk,
    character
);

export default allMiddleware;
