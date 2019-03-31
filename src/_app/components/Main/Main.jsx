import * as React from 'react';
import {Route} from 'react-router-dom';

import './Main.scss';

import About from '../../pages/About/About';
import ArticlesConnecter from '../../connecters/ArticlesConnecter';
import ArticleConnecter from '../../connecters/ArticleConnecter';

const Main = () => (
    <main className="main">
        <Route exact path="/" component={ArticlesConnecter} />
        <Route path="/home" component={ArticlesConnecter} />
        <Route path="/article" component={ArticleConnecter} />
        <Route path="/about" component={About} />
    </main>
);

export default Main;
