import React from 'react';
import { connect } from 'react-redux';

import { AppActions } from '../actions';
import Header from './Header';
import Main from './Main';
import SignIn from './SignIn';
import CharacterList from './CharacterList';
import './App.css';

const LOADING_STATUS = AppActions.LOADING_STATUS;
const APP_VIEW = AppActions.APP_VIEW;

const mapStateToProps = state => ({
    appView: state.app.appView
});

const App = ({ appView, loadingStatus }) => {
    let contentWidget = <div>This is where content should go.</div>;

    switch(appView) {
        case APP_VIEW.CHAR_SHEET:
            contentWidget = <Main />;
            break;
        case APP_VIEW.CHAR_LIST:
            contentWidget = <CharacterList />;
            break;
        default:
            contentWidget = <SignIn />;
            break;
    }

    return (
        <div className="App">
            <Header />
            {contentWidget}
        </div>
    )
};

export default connect(mapStateToProps)(App);
