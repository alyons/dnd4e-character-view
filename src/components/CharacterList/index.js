import React from 'react';
import { connect } from 'react-redux';
import { AppActions } from '../../actions';
import Item from './Item';

const APP_VIEW = AppActions.APP_VIEW;

const mapStateToProps = state => ({
    characterList: [
        'Terios',
        'Yu',
        'ThatGuy'
    ]
});

const mapDispatchToProps = dispatch => ({
    selectCharacter: character => {
        dispatch(AppActions.setAppView(APP_VIEW.CHAR_SHEET));
    }
});

const CharacterList = ({ characterList, selectCharacter }) => {
    const listItems = characterList.map(item => {
        return <Item key={item} name={item}/>;
    });
    return (<ul>{listItems}</ul>);
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
