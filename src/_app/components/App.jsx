import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Aside from './Aside/Aside';
import Main from './Main/Main';

import store from '../store';
import {getPosts} from '../actions';

import './App.scss';

class App extends React.Component {
    componentDidMount() {
        store.dispatch(getPosts());
    }

    render() {
        return (
            <Router>
                <div className="app">
                    <Aside />
                    <Main />
                </div>
            </Router>
        );
    }
}

export default App;
