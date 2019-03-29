import * as React from 'react';
import {connect} from 'react-redux';

import Aside from './Aside/Aside';
import Main from './Main/Main';

import './App.scss';

export const AppLayout = () => (
    <div className="app">
        <Aside />
        <Main />
    </div>
);

const mapStateToProps = () => {};
export const App = connect(mapStateToProps)(AppLayout);
