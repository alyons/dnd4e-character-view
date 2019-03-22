import React from 'react';
import { connect } from 'react-redux';

import { AppActions } from '../actions';
import Header from './Header';
import Main from './Main';
import LogIn from './LogIn';

import './App.css';

const LOADING_STATUS = AppActions.LOADING_STATUS;

const mapStateToProps = state => ({
    loadingStatus: state.app.loadingStatus
});

const App = ({loadingStatus, onResponse}) => {
    let mainComponent = loadingStatus === LOADING_STATUS.LOADED ?
                        <Main /> :
                        <LogIn />;

    return (
        <div className="App">
            <Header />
            {mainComponent}
        </div>
    )
};

export default connect(mapStateToProps)(App);
