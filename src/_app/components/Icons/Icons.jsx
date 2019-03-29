import * as React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import './Icons.scss';

import facebook from './facebook.svg';
import instagram from './instagram.svg';
import github from './github.svg';
import twitter from './twitter.svg';

const Icons = () => (
    <Router>
        <section>
            <Link to="/">
                <img className="icon --left" src={facebook} alt="facebook" />
            </Link>
            <Link to="/">
                <img className="icon" src={instagram} alt="instagram" />
            </Link>
            <Link to="/">
                <img className="icon" src={github} alt="github" />
            </Link>
            <Link to="/">
                <img className="icon" src={twitter} alt="twitter" />
            </Link>
        </section>
    </Router>
);

export default Icons;
