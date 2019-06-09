import React from 'react';
import { connect } from 'react-redux';
import { AppActions, CharacterActions } from '../../actions';

const APP_VIEW = AppActions.APP_VIEW;

const mapDispatchToProps = dispatch => ({
    selectCharacter: character => {
        dispatch(CharacterActions.loadCharacter());
        dispatch(AppActions.setAppView(APP_VIEW.CHAR_SHEET));
    }
});

const CharacterItem = ({ name, selectCharacter }) => {
    return (
        <button onClick={() => selectCharacter(name)}>
            {name}
        </button>
    );
};

export default connect(null, mapDispatchToProps)(CharacterItem);
