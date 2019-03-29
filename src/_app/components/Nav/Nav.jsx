import * as React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import './Nav.scss';

import Text from '../Text/Text';

const Nav = () => (
    <nav className="nav">
        <Router>
            <div>
                <Link to="/home" className="nav__link">
                    <Text>
                        {'home'}
                    </Text>
                </Link>
                <Link to="/about" className="nav__link">
                    <Text>
                        {'About'}
                    </Text>
                </Link>
            </div>
        </Router>
    </nav>
);

export default Nav;
