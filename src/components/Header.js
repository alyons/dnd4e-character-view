import React from 'React';
import { connect } from 'react-redux';

import { logIn } from '../actions';

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    logIn: credentials => dispatch(logIn(credentials))
});

const Header = ({ user, logIn, logOut }) => (
    <div className="header">
        <button onClick={() => logIn({ username: 'BlazePhoenix', password: 'somePassword' })}>Log In</button>
    </div>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
