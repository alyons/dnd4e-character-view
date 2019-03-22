import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Character from './Character';
import CombatPanel from '../containers/CombatPanel';
import Equipment from './Equipment';
import Header from './Header';
import Inventory from './Inventory';

import character from '../images/017-paper.svg';
import combat from '../images/007-swords.svg';
import equipment from '../images/armor.svg';
import inventory from '../images/003-treasure.svg';
import './App.css';
import 'react-tabs/style/react-tabs.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <Header /> */}
                <Tabs>
                    <TabList>
                        <Tab><img src={character} className="App-tab-icon" alt="Character" /></Tab>
                        <Tab><img src={combat} className="App-tab-icon" alt="Combat" /></Tab>
                        <Tab><img src={equipment} className="App-tab-icon" alt="Equipment" /></Tab>
                        <Tab><img src={inventory} className="App-tab-icon" alt="Inventory" /></Tab>
                    </TabList>
                    <TabPanel><Character /></TabPanel>
                    <TabPanel><CombatPanel /></TabPanel>
                    <TabPanel><Equipment /></TabPanel>
                    <TabPanel><Inventory /></TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default App;
