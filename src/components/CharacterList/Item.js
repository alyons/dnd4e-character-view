import React from 'react';
import { connect } from 'react-redux';
import { AppActions } from '../../actions';

const mapDispatchToProps = dispatch => ({
    selectCharacter: character => {
        dispatch()
    }
});

const Item = ({ name, selectCharacter }) => {
    return (
        <div onClick={() => selectCharacter(name)}>
            {name}
        </div>
    );
};

export default Item;
