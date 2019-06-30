import { CharacterActions } from '../../actions';

const {
    CHARACTER_LOAD_SUCCESS,
    ADD_CONDITION,
    REMOVE_CONDITION
} = CharacterActions;

const initialState = {

};

let conditions;

const character = (state = initialState, action) => {
    switch(action.type) {
        case CHARACTER_LOAD_SUCCESS:
            return Object.assign({}, state, action.character);
        case ADD_CONDITION:
            conditions = state.conditions || [];
            conditions.push(action.condition);
            return Object.assign({}, state, { conditions });
        case REMOVE_CONDITION:
            conditions = state.conditions || [];
            conditions.splice(action.inded, 1);
            return Object.assign({}, state, { conditions });
        default:
            return state;
    }
};

export default character;
