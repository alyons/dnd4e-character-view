import { UserActions } from '../actions';

const user = (state = { }, action) => {
    switch(action.type) {
        case UserActions.LOG_IN:
            return Object.assign({}, state, action.user);
        default:
            return state;
    }
};

export default user;
