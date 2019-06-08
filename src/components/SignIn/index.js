import React from 'react';
import { connect } from 'react-redux';
import { AppActions, UserActions } from '../../actions';
import './SignIn.css'

const APP_VIEW = AppActions.APP_VIEW;

const mapStateToProps = state => ({
    loadingStatus: state.app.loadingStatus
});

const mapDispatchToProps = dispatch => ({
    logIn: data => {
        dispatch(UserActions.logIn(data));
        dispatch(AppActions.setAppView(APP_VIEW.CHAR_LIST));
    }
});

const SignIn = ({ loadingStatus, logIn }) => {
    let toDisplay = (
        <button
            onClick={() => logIn({ userName: 'PyroticBlaziken' })}>
            Fake Log In
        </button>
    );

    // if (loadingStatus === LOADING_STATUS.LOADING) {
    //     toDisplay = (<div className="lds-hourglass"></div>);
    // }

    return (
        <div className="sign-in">
            {toDisplay}
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
