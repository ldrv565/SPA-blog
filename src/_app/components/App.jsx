import * as React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import Aside from './Aside/Aside';
import Main from './Main/Main';

import './App.scss';

export const AppLayout = () => (
    <Router>
        <div className="app">
            <Aside />
            <Main />
        </div>
    </Router>
);

const mapStateToProps = () => {};
export const App = connect(mapStateToProps)(AppLayout);
