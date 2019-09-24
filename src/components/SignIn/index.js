import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';

import { logInSuccess, logInFailure } from '../../actions/userActions';
import { isLocalDev } from '../../util';
import './SignIn.css'

const mapDispatchToProps = dispatch => ({
    onSuccess: user => {
        dispatch(logInSuccess(user));
    },
    onFailure: response => {
        dispatch(logInFailure(response));
    }
});

const SignIn = ({ onSuccess, onFailure }) => {
    let toRender = (
        <GoogleLogin
            clientId="123309033865-7up73rgtad1kgt3vf2qenohltotr0dce.apps.googleusercontent.com"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />
    );

    if (isLocalDev) {
        toRender = (
            <button
                onClick={() => onSuccess({ userName: 'PyroticBlaziken' })}>
                Fake Log In
            </button>
        );
    }

    return (
        <div className="sign-in">
            {toRender}
        </div>
    )
};

export default connect(null, mapDispatchToProps)(SignIn);
