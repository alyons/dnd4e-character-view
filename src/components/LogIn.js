import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';

import { AppActions, UserActions } from '../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onResponse: response => {
        if (response.profileObj) {
            dispatch(UserActions.logIn(response.profileObj));
            dispatch(AppActions.setLoadingStatus('LOADED'));
        } else {
            dispatch(AppActions.setLoadingStatus('FAILED'));
        }
    }
});

const LogIn = ({ onResponse }) => (
    <GoogleLogin
        clientId='123309033865-b85i6q4rapt9tf17qp38chvnbbcn35js.apps.googleusercontent.com'
        onSuccess={onResponse}
        onFailure={onResponse}
    />
);

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
