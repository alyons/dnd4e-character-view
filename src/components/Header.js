import React from 'react';
import { connect } from 'react-redux';

import person from '../images/person.svg';

import './Header.css'

const mapStateToProps = state => ({
    user: state.user
});

// const mapDispatchToProps = dispatch => ({
//     logIn: credentials => dispatch(logIn(credentials))
// });

const Header = ({ user }) => {
    const imgSource = (user.imageUrl) ? user.imageUrl : person;

    return (
        <div className="header">
            <img className="user-icon" src={imgSource} />
        </div>
    )
};

export default connect(mapStateToProps)(Header);
