import { UserActions } from '../actions';

const initialState = { };

const user = (state = initialState, action) => {
    switch(action.type) {
        case UserActions.LOG_IN:
            return Object.assign({}, state, action.user);
        default:
            return state;
    }
};

export default user;
