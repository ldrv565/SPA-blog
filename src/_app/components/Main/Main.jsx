import * as React from 'react';
import {Route} from 'react-router-dom';

import './Main.scss';

import About from '../../pages/About/About';
import ArticlesContainer from '../../containers/ArticlesContainer';
import ArticleContainer from '../../containers/ArticleContainer';

const Main = () => (
    <main className="main">
        <Route exact path="/" component={ArticlesContainer} />
        <Route path="/home" component={ArticlesContainer} />
        <Route path="/article" component={ArticleContainer} />
        <Route path="/about" component={About} />
    </main>
);

export default Main;
