import { LOG_IN } from '../actions';

export default function userChange(state = { }, action) {
    switch(action.type) {
        case LOG_IN:
            let { credentials } = action;
            return Object.assign({}, state, {
                username: credentials.username || 'PyroticBlaziken'
            });
        default:
            return state;
    }
}
