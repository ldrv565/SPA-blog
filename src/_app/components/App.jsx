import * as React from 'react';
import {connect} from 'react-redux';
import './App.style.scss';

export const AppLayout = () => (
    <div className="app">
        <span>
            {'app'}
        </span>
    </div>
);

const mapStateToProps = () => {};
export const App = connect(mapStateToProps)(AppLayout);
