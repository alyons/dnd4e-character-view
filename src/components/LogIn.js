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

const isLocalhost = () => {
    return (location.host === 'localhost' || location.host === '127.0.0.1' || location.host === '');
};

const LogIn = ({ onResponse }) => (
    <div className="log-in">
    {
        isLocalhost ?
        <button
            onClick={() => onResponse({
                profileObj: { userName: 'Some User' }
            })}>Fake Log In</button>
        :
        <GoogleLogin
            clientId='123309033865-b85i6q4rapt9tf17qp38chvnbbcn35js.apps.googleusercontent.com'
            onSuccess={onResponse}
            onFailure={onResponse}
        />
    }
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
