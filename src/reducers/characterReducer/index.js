import { CharacterActions } from '../../actions';

const initialState = {

};

const character = (state = initialState, action) => {
    switch(action.type) {
        case CharacterActions.CHARACTER_LOAD_SUCCESS:
            return Object.assign({}, state, action.character);
        default:
            return state;
    }
};

export default character;
