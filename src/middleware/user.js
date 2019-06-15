import { AppActions, UserActions } from '../actions';

const {
    LOG_IN_SUCCESS
} = UserActions;

const actionWhiteList = [
    LOG_IN_SUCCESS
];

const actionInWhiteList = action => {
    return actionWhiteList.includes(action.type);
};

const userMiddleware = store => next => action => {
    next(action);

    if (!actionInWhiteList(action)) {
        return;
    }

    switch(action.type) {
        case LOG_IN_SUCCESS:
            store.dispatch(UserActions.fetchCharacterList());
            break;
    }
};

export default userMiddleware;
